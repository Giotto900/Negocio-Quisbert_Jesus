const buscarBtn = document.getElementById('buscarBtn');
const pokemonInput = document.getElementById('pokemonInput');
const resultadoDiv = document.getElementById('resultado');

buscarBtn.addEventListener('click', async () => {
    const nombrePokemon = pokemonInput.value.trim().toLowerCase();

    if (!nombrePokemon) {
        resultadoDiv.innerHTML = '<p class="error">Por favor ingresa el nombre de un Pokémon.</p>';
        return;
    }

    resultadoDiv.innerHTML = '<p>Cargando...</p>';

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);

        if (!response.ok) {
            throw new Error('El Pokémon no existe o hubo un error en la búsqueda.');
        }

        const data = await response.json();

        const pesoKg = (data.weight / 10).toFixed(1);
        const alturaM = (data.height / 10).toFixed(1);

        const tipos = data.types.map(t => t.type.name).join(', ');

        resultadoDiv.innerHTML = `
            <h3>${data.name.toUpperCase()}</h3>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p><strong>Tipo:</strong> ${tipos}</p>
            <p><strong>Peso:</strong> ${pesoKg} kg</p>
            <p><strong>Altura:</strong> ${alturaM} m</p>
        `;

    } catch (error) {
        resultadoDiv.innerHTML = `<p class="error">❌ No se encontró el Pokémon "${nombrePokemon}". Intenta con otro nombre.</p>`;
    }
});