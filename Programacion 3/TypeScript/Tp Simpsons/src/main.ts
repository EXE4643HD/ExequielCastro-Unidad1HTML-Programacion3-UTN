// 5.1 Interfaces y tipos
interface SimpsonCharacter {
    id: number;
    name: string;
    age?: number;
    occupation?: string;
    "portrait path"?: string;
    portrait_path?: string; // Por seguridad si varía la nomenclatura
    phrases: string[];
    status: string;
}

interface IResponseApi {
    count: number;
    next: string | null;
    prev: string | null;
    pages: number;
    results: SimpsonCharacter[];
}

// 5.2 Variables y constantes
const API_URL: string = "https://thesimpsonsapi.com/api/characters";
const IMAGE_BASE_URL: string = "https://cdn.thesimpsonsapi.com/500";

const loadBtn = document.getElementById("load-btn") as HTMLButtonElement;
const loadingSection = document.getElementById("loading") as HTMLElement;
const errorDiv = document.getElementById("error-message") as HTMLDivElement;
const charactersContainer = document.getElementById("characters-container") as HTMLDivElement;

// 5.3 Funciones requeridas
const showLoading = (): void => {
    loadingSection.classList.remove("hidden");
    errorDiv.classList.add("hidden");
};

const hideLoading = (): void => {
    loadingSection.classList.add("hidden");
};

const showError = (message: string): void => {
    errorDiv.textContent = message;
    errorDiv.classList.remove("hidden");
    setTimeout(() => {
        errorDiv.classList.add("hidden");
    }, 5000);
};

const createCharacterCard = (character: SimpsonCharacter): HTMLElement => {
    const card = document.createElement("div");
    card.className = "character-card";

    const img = document.createElement("img");
    // Manejo de la ruta de la imagen según la consigna
    const portraitPath = character["portrait path"] || character.portrait_path || "";
    img.src = `${IMAGE_BASE_URL}${portraitPath}`;
    img.alt = character.name;

    const nameTitle = document.createElement("h3");
    nameTitle.textContent = character.name;

    const phraseP = document.createElement("p");
    // Mostrar la primera frase si existe, sino un texto por defecto
    const quote = character.phrases && character.phrases.length > 0 ? character.phrases[0] : "Sin frases registradas";
    phraseP.textContent = `"${quote}"`;

    card.appendChild(img);
    card.appendChild(nameTitle);
    card.appendChild(phraseP);

    return card;
};

const renderCharacters = (characters: SimpsonCharacter[]): void => {
    charactersContainer.innerHTML = "";
    characters.forEach((character) => {
        const card = createCharacterCard(character);
        charactersContainer.appendChild(card);
    });
};

const fetchCharacters = async (): Promise<void> => {
    showLoading();
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.statusText}`);
        }
        const data: IResponseApi = await response.json();
        
        if (data && data.results) {
            renderCharacters(data.results);
        } else {
            throw new Error("Formato de datos inválido recibido de la API.");
        }
    } catch (error) {
        console.error("Error al obtener los personajes:", error);
        showError("No se pudieron cargar los personajes. Por favor, intenta nuevamente.");
    } finally {
        hideLoading();
    }
};

// 5.4 Event Listeners
if (loadBtn) {
    loadBtn.addEventListener("click", () => {
        fetchCharacters();
    });
}