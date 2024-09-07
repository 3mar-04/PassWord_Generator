function getPassWord() {
  const length = document.getElementById("Number").value;
  const LowerCase = document.getElementById("LowerCase").checked;
  const UpperCase = document.getElementById("UpperCase").checked;
  const Numbers = document.getElementById("Numbers").checked;
  const Symbols = document.getElementById("Symbles").checked;
  const Result = document.getElementById("Result");

  const Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const Lower = "abcdefghijklmnopqrstuvwxyz";
  const Number = "0123456789";
  const Symbol = "+-*/!@#$%^&()_=.";
  let PassWord = "";
  let AllowedChars = "";

  AllowedChars += LowerCase ? Lower : "";
  AllowedChars += UpperCase ? Upper : "";
  AllowedChars += Numbers ? Number : "";
  AllowedChars += Symbols ? Symbol : "";

  if (length <= 0) {
    window.alert("the Number must be 1 at least");
  }

  if (AllowedChars.length <= 0) {
    window.alert("You Must select 1 option at least");
  }

  for (i = 0; i < length; i++) {
    PassWord += AllowedChars.charAt(
      Math.floor(Math.random() * AllowedChars.length)
    );
  }
  Result.textContent = PassWord;
}
