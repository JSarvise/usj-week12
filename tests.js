test("convertIntegerToRoman Test", function(assert) {
  assert.propEqual(convertRomanToInteger("I"), {value: 1, message: '', result: true}, "TC-1");
  assert.propEqual(convertIntegerToRoman(3999), {value: "MMMCMXCIX", message: "", result: true}, "TC-2");
  assert.propEqual(convertIntegerToRoman(0), {value: 0, message: "Out of range (1-3999)", result: false}, "TC-3");
  assert.propEqual(convertIntegerToRoman(-1), {value: 0, message: "Please enter a valid integer", result: false}, "TC-4");
  assert.propEqual(convertIntegerToRoman("X"), {value: 0, message: "Please enter a valid integer", result: false}, "TC-5");
  assert.propEqual(convertIntegerToRoman(4000), {value: 0, message: "Out of range (1-3999)", result: false}, "TC-6");
  assert.propEqual(convertIntegerToRoman(123), {value: "CXXIII", message: "", result: true}, "TC-7");
  assert.propEqual(convertIntegerToRoman(1024), {value: "MXXIV", message: "", result: true}, "TC-8");
  assert.propEqual(convertIntegerToRoman(1.5), {value: 0, message: "Please enter a valid integer", result: false}, "TC-9");
});

test("convertRomanToInteger Test", function(assert) {
  assert.propEqual(convertRomanToInteger("I"), {value: 1, message: "", result: true}, "TC-10");
  assert.propEqual(convertRomanToInteger("MMMCMXCIX"), {value: 3999, message: "", result: true}, "TC-11");
  assert.propEqual(convertRomanToInteger(""), {value: 0, message: "Please enter a valid roman", result: false}, "TC-12");
  assert.propEqual(convertRomanToInteger("IVX"), {value: 0, message: "Please enter a valid roman", result: false}, "TC-13");
  assert.propEqual(convertRomanToInteger("MMCMXCVIII"), {value: 2998, message: "", result: true}, "TC-14");
  assert.propEqual(convertRomanToInteger("MMMM"), {value: 0, message: "Please enter a valid roman", result: false}, "TC-15");
  assert.propEqual(convertRomanToInteger("m"), {value: 1000, message: "", result: true}, "TC-16");
});
