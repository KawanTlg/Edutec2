
      let ranking = [];

        function adicionarRanking() {
            const nome = document.getElementById('nome').value;
            const pontuacao = parseInt(document.getElementById('pontuacao').value);

            if (nome === "" || isNaN(pontuacao)) {
                alert("Por favor, insira um nome e uma pontuação válida.");
                return;
            }

            ranking.push({ nome, pontuacao });

            document.getElementById('nome').value = "";
            document.getElementById('pontuacao').value = "";

            atualizarRanking();
        }

        function atualizarRanking() {
  
            ranking.sort((a, b) => b.pontuacao - a.pontuacao);

            const tbody = document.getElementById('ranking-list');
            tbody.innerHTML = "";  

            ranking.forEach((item, index) => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${item.nome}</td>
                    <td>${item.pontuacao}</td>
                `;
                tbody.appendChild(tr);
            });
        }

