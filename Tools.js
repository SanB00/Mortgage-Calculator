function calcularHipoteca(event) {
  event.preventDefault();
  let cuota = document.forms["mortgagef"]["cuotaf"].value;
  let intereses = document.forms["mortgagef"]["interestsf"].value;
  let totalPrice = document.forms["mortgagef"]["pricef"].value;
  let termYears = document.forms["mortgagef"]["yearsf"].value;
  MonthsOnYear = 12;
  const mortgage = {
    totalLoan: 0,
    totalInteresrs: 0,
    monthlyCost: 0,
  };
  mortgage.totalLoan = totalPrice - cuota;
  mortgage.totalInteresrs = (mortgage.totalLoan * intereses) / 100;
  mortgage.monthlyCost =
    (mortgage.totalLoan + mortgage.totalInteresrs) / (termYears * MonthsOnYear);
  outputMortgage(mortgage);
}
function outputMortgage(mortgage) {
  document.getElementById("ocuota").innerHTML = valueToDollar(
    mortgage.totalLoan
  );
  document.getElementById("omontoprestamo").innerHTML = valueToDollar(
    mortgage.monthlyCost
  );
}
function valueToDollar(value) {
  const dollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  return dollar.format(value);
}
function resetForm() {
  document.forms["mortgagef"].reset();
}
