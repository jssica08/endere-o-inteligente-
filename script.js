document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-endereco");
    const cepInput = document.getElementById("cep");
    const ufInput = document.getElementById("uf");
    const logradouroInput = document.getElementById("logradouro");
    const numeroInput = document.getElementById("numero");
  
    // Formatar CEP automaticamente (00000-000)
    cepInput.addEventListener("input", () => {
      let value = cepInput.value.replace(/\D/g, ""); // Remove não-dígitos
      if (value.length > 5) {
        value = value.slice(0, 5) + "-" + value.slice(5, 8);
      }
      cepInput.value = value;
    });
  
    // Converter UF para maiúsculo automaticamente
    ufInput.addEventListener("input", () => {
      ufInput.value = ufInput.value.toUpperCase().replace(/[^A-Z]/g, "").slice(0, 2);
    });
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const cep = cepInput.value.trim();
      const logradouro = logradouroInput.value.trim();
      const numero = numeroInput.value.trim();
      const uf = ufInput.value.trim();
  
      const cepRegex = /^\d{5}-\d{3}$/;
      const ufRegex = /^[A-Z]{2}$/;
      const numeroRegex = /^\d+$/;
  
      // Validações
      if (!cepRegex.test(cep)) {
        alert("CEP inválido. Use o formato 00000-000.");
        return;
      }
  
      if (logradouro.length < 5) {
        alert("Logradouro deve conter no mínimo 5 caracteres.");
        return;
      }
  
      if (!numeroRegex.test(numero)) {
        alert("Número deve conter apenas dígitos.");
        return;
      }
  
      if (!ufRegex.test(uf)) {
        alert("UF inválido. Use exatamente 2 letras maiúsculas.");
        return;
      }
  
      alert("Endereço cadastrado com sucesso");
      form.reset();
    });
  });
  