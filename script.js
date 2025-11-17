const url = "https://jsonplaceholder.typicode.com/posts";

document.getElementById("btnGet").addEventListener("click", buscarPosts);
document.getElementById("btnPost").addEventListener("click", criarPost);

// GET – Buscar posts
async function buscarPosts() {
    try {
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error("Erro ao buscar dados: " + resposta.status);
        }

        const dados = await resposta.json();

        mostrarResultados(dados.slice(0, 5)); // mostra só 5 para ficar limpo
    } catch (erro) {
        console.error(erro);
        document.getElementById("resultado").innerHTML =
            "<p>Erro ao buscar posts.</p>";
    }
}

// POST – Criar um novo post
async function criarPost() {
    try {
        const novoPost = {
            title: "Meu Post Criado",
            body: "Conteúdo do post criado via API.",
            userId: 1
        };

        const resposta = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(novoPost)
        });

        if (!resposta.ok) {
            throw new Error("Erro ao criar post: " + resposta.status);
        }

        const dados = await resposta.json();
        mostrarResultados([dados]);
    } catch (erro) {
        console.error(erro);
        document.getElementById("resultado").innerHTML =
            "<p>Erro ao criar post.</p>";
    }
}

// Mostrar resultados na página
function mostrarResultados(posts) {
    const div = document.getElementById("resultado");
    div.innerHTML = "";

    posts.forEach(post => {
        div.innerHTML += `
            <div class="card">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <strong>ID do Post:</strong> ${post.id}
            </div>
        `;
    });
}
