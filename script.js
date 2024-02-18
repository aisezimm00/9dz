    const array = [1,22,3,4,5,6,6,7,8,9,9,8,7,6,-1]
    const functions = {
        getLength:function length(){
           return  array.length
        },
        getSum: function Sum(element){
            let sum = 0
              for (let i = 0; i < element.length; i++) {
                sum += element[i]
            }
            return sum
        },
        getMax: function max(element){
            let maxNum = Math.max(...element)
            return maxNum
        },
        getMin: function min(element){
            let minNum = Math.min(...element)
            return minNum
        }
    }


    console.log("длина массива " + functions.getLength());
    console.log("cумма всех чисел в массиве " + functions.getSum(array));
    console.log("макс значение в массиве " + functions.getMax(array));
    console.log("мин занчение в массиве " + functions.getMin(array));
