let a, b;

const liczbaA = document.getElementById('liczbaA');
const liczbaB = document.getElementById('liczbaB');
const result = document.getElementById('result');

const dodawanie = () => {
    a = parseInt(liczbaA.value);
    b = parseInt(liczbaB.value);

    result.innerHTML = `Wynik: ${a+b}`;
}

const odejmowanie = () => {
    a = parseInt(liczbaA.value);
    b = parseInt(liczbaB.value);

    result.innerHTML = `Wynik: ${a-b}`;
}

const mnozenie = () => {
    a = parseInt(liczbaA.value);
    b = parseInt(liczbaB.value);

    result.innerHTML = `Wynik: ${a*b}`;
}

const dzielenie = () => {
    a = parseInt(liczbaA.value);
    b = parseInt(liczbaB.value);

    result.innerHTML = `Wynik: ${a/b}`;
}

const potegowanie = () => {
    a = parseInt(liczbaA.value);
    b = parseInt(liczbaB.value);

    result.innerHTML = `Wynik: ${Math.pow(a, b)}`;
}