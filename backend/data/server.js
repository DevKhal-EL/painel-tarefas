const express = require('express');
const cors = require('cors');
const fs = require('fs/promises');
const path = require('path');

const app = express();
const PORT = 3000;

const tarefasPath = path.join(__dirname, 'tarefas.json');

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ok: true, message: 'API no ar'});
});

app.get('/api/tarefas', async (req, res) => {
  try {
    const raw = await fs.readFile(tarefasPath, 'utf-8');
    const data = JSON.parse(raw);
    res.json(data);
  } catch (error) {
    res.status(500).json({
      ok:false,
      message: 'Erro ao ler tarefas.json',
    });

  }

});

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`)  
})

// {"ok":true,"message":"API no ar"} - Não deveria aparecer o conteudo no tarefas.json? 