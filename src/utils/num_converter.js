class Num_comverter {
  constructor(roman_num) {
    this.num = roman_num;
  }

  #has_data() {
    const num_data = new Map();
    num_data.set("i", 1);
    num_data.set("v", 5);
    num_data.set("x", 10);
    num_data.set("l", 50);
    num_data.set("c", 100);
    num_data.set("d", 500);
    num_data.set("m", 1000);
    return num_data;
  }

  convert_to_decimal() {
    let roman_num = [...this.num.toLowerCase()];
    const hash_data = this.#has_data();
    let result = 0;
    for (let i = 0; i < roman_num.length; i++) {
      const current = roman_num[i];
      const next = roman_num[i + 1];
      let bool =
        current + next === "iv" ||
        current + next === "ix" ||
        current + next === "xl" ||
        current + next === "xc" ||
        current + next === "cd" ||
        current + next === "cm";

      if (bool) {
        roman_num[i] = hash_data.get(next) - hash_data.get(current);
        roman_num[i + 1] = undefined;
      } else {
        roman_num[i] = hash_data.get(current);
      }
      if (roman_num[i] !== undefined) {
        result += roman_num[i];
      }
    }
    return result;
  }

  convert_to_roman() {
    let num = this.num;
    var numbers = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
      },
      roman = "",
      i;
    for (i in numbers) {
      while (num >= numbers[i]) {
        roman += i;
        num -= numbers[i];
      }
    }
    return roman;
  }
}

export default Num_comverter;
