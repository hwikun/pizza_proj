export function formatCurrency(number) {
  var numStr = number.toString();
  // 세 자리마다 콤마를 찍기 위한 정규 표현식
  return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
