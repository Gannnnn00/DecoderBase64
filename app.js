// Encode ke Base64
document.getElementById("encodeBtn").addEventListener("click", () => {
  const input = document.getElementById("inputText").value;
  const output = document.getElementById("output");

  try {
    const encoded = btoa(input);
    output.textContent = encoded;
  } catch (err) {
    output.textContent = "⚠️ Gagal encode!";
  }
});

// Decode dari Base64
document.getElementById("decodeBtn").addEventListener("click", () => {
  const input = document.getElementById("inputText").value;
  const output = document.getElementById("output");

  try {
    const decoded = atob(input);
    output.textContent = decoded;
  } catch (err) {
    output.textContent = "⚠️ Base64 tidak valid!";
  }
});

// Clear input & output
document.getElementById("clearBtn").addEventListener("click", () => {
  document.getElementById("inputText").value = "";
  document.getElementById("output").textContent = "";
});

// Copy hasil
document.getElementById("copyBtn").addEventListener("click", () => {
  const text = document.getElementById("output").textContent;

  if (!text) {
    alert("Tidak ada hasil untuk di-copy.");
    return;
  }

  navigator.clipboard
    .writeText(text)
    .then(() => alert("Berhasil dicopy!"))
    .catch(() => alert("Gagal menyalin teks."));
});
