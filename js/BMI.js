//BMI計算オブジェクト
class BMI {
  constructor(height = 0, weight = 0) {
    this.height = height;
    this.weight = weight;
  }
  //BMI計算メソッド
  getBMI() {
    let bmi = this.weight / Math.pow(this.height / 100, 2);

    bmi = bmi * 10;
    bmi = Math.round(bmi);
    bmi = bmi / 10;

    return bmi;
  }

  getAdvice() {
    let bmi = this.weight / Math.pow(this.height / 100, 2);
    bmi = Math.round(bmi);
    let idealweight = 22 * Math.pow(this.height / 100, 2);

    idealweight = Math.round(idealweight);

    //BMI22
    let adviceMessage = "理想体重です。現状を維持しましょう。";
    //BMI22以下
    if (bmi > 22) {
      adviceMessage = "太り気味です。" + idealweight + "kgを目指しましょう。";
    } else if (bmi < 22) {
      adviceMessage = "痩せ気味です。" + idealweight + "kgを目指しましょう。";
    }

    return adviceMessage;
  }
}

window.addEventListener("DOMContentLoaded", function() {
  let heightInput = document.getElementById("heightInput");
  heightInput.addEventListener("input", checkInput);
  heightInput.addEventListener("blur", checkInput);
  let weightInput = document.getElementById("weightInput");

  weightInput.addEventListener("input", checkInput);
  weightInput.addEventListener("blur", checkInput);

  function checkInput() {
    let buttonEnabled = true;
    let heightStr = heightInput.value;
    let height = Number(heightStr);
    let heightInputMsg = document.getElementById("heightInputMsg");

    if (heightStr.length === 0) {
      buttonEnabled = false;
      heightInputMsg.textContent = "身長を入力してください。";
    } else if (!Number.isFinite(height)) {
      buttonEnabled = false;
      heightInputMsg.textContent = "身長には数値を入力してください。";
    } else if (height <= 0) {
      buttonEnabled = false;
      heightInputMsg.textContent = "身長には正数を入力してください。";
    } else {
      heightInputMsg.textContent = "";
    }

    let weightStr = weightInput.value;
    let weight = Number(weightStr);
    let weightInputMsg = document.getElementById("weightInputMsg");
    if (weightStr.length === 0) {
      buttonEnabled = false;
      weightInputMsg.textContent = "体重を入力してください。";
    } else if (!Number.isFinite(weight)) {
      buttonEnabled = false;
      weightInputMsg.textContent = "体重には数値を入力してください。";
    } else if (weight <= 0) {
      buttonEnabled = false;
      weightInputMsg.textContent = "体重には正数を入力してください。";
    } else {
      weightInputMsg.textContent = "";
    }

    let calcBMIButton = document.getElementById("calcBMIButton");

    if (buttonEnabled) {
      calcBMIButton.removeAttribute("disabled");
    } else {
      calcBMIButton.setAttribute("disabled", "disabled");
    }
  }
});
