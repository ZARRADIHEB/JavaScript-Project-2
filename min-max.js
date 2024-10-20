arr = [4,77,54,-32,-22]
function minMax(arr) {
	max = arr[0]
	min = arr[0]
	for (let i =1; i<=arr.length; i++) {
    if (arr[i]>max) {
      max=arr[i]
    }
    if (arr[i]<min) {
      min=arr[i]
    }
  }
  return ["minimum number is " + min + " and maximum number is " + max]
}
console.log(minMax(arr))