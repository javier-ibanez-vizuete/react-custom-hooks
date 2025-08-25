import { useContext, useState } from "react";
import { CustomInput } from "../CustomInput/CustomInput";
import "./PokemonViewer.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import { useFetch } from "../../hooks/useFetch";

const INITIAL_INPUT_DATA = {
	pokemonId: "",
};

export const PokemonViewer = () => {
	const [inputData, setInputData] = useState(INITIAL_INPUT_DATA);
	const { lang, TEXTS } = useContext(LanguageContext);

	const { data, loading, errorFetch } = useFetch(
		`https://pokeapi.co/api/v2/pokemon-form/${inputData.pokemonId ? inputData.pokemonId : 17}/`
	);

	const onInputChange = (event) => {
		const { name, value } = event.target;
		setInputData((prevData) => ({ ...prevData, [name]: value }));
	};

	return (
		<section className="pokemon-viewer">
			<CustomInput inputName={"pokemonId"} labelName={TEXTS[lang].pokemonNameLabel}>
				<span className="pokemon-example text-small">{TEXTS[lang].pokemonExampleId}</span>
				<input
					type="number"
					name="pokemonId"
					id="pokemonId"
					value={inputData.pokemonId}
					onChange={onInputChange}
					placeholder={TEXTS[lang].pokemonNamePlaceholder}
				/>
			</CustomInput>

			{!inputData.pokemonId && (
				<div className={`pokemon-card-container ${data?.types[0].type.name}`}>
					<div className="pokemon-image">
						<img src={data?.sprites?.front_default} alt={data?.name} />
					</div>

					<h4>{data?.name}</h4>
				</div>
			)}
			{inputData.pokemonId && loading && <h3>{TEXTS[lang].pokemonLoadingText}</h3>}
			{inputData.pokemonId && !loading && !errorFetch && (
				<div className={`pokemon-card-container ${data?.types[0].type.name}`}>
					<div className="pokemon-image">
						<img src={data?.sprites?.front_default} alt={data?.name} />
					</div>

					<h4>{data?.name}</h4>
				</div>
			)}
			{inputData.pokemonId && errorFetch && <h3>{TEXTS[lang].pokemonFetchError}</h3>}
		</section>
	);
};
