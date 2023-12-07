export function selectOption({ name, index }, optionValue) {
  const selectedValue = optionValue;

  const selectedOption = this.productOptions.find(
    (option) => option.name === name
  );
  const allOptionValuesWithoutSelected = selectedOption.values.filter(
    (value) => value !== selectedValue
  );

  const targetOptions = [
    selectedValue,
    ...this.selectedVariant.options.filter(
      (value) => !allOptionValuesWithoutSelected.includes(value)
    ),
  ];

  this.product.variants.some((variant) => {
    if (variant.options.every((option) => targetOptions.includes(option))) {
      this.selectedVariant = variant;
      return true;
    }
  });
}
