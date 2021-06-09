 console.log("*********.map***********")
 const number = [4, 9, 16, 25, 36, 49, 64, 81, 100];
 const multi = number.map(Math.sqrt);
 console.log(multi);



 console.log("********filter********")
 var friends = ['saniya', 'Himanshi', 'Rajveer', 'Priyanshu', 'Shrikant', 'Siya', 'Bhavika']
 var bestfriend = friends.filter(word => word.length >= 6)
 console.log(bestfriend + " are bestfriends");



 console.log("*********.find************")
 var numbers = ['23', '12', '45', '3', '200', '24', '7', '120']
 var find = numbers.find(item => item == 24)
 console.log(find)

 console.log("************.findindexof******************")
 var arr1 = [23, 15, 6, 0, 45, 78]
 var smallerthan = element => element < 10;
 console.log(arr1.findIndex(smallerthan))

 console.log("************fill***************")
 var fruits = ['Orange', 'Banana', 'Apple', 'kiwi', 'peaches', 'Berries']
 console.log(fruits.fill('Grapes'))




 console.log("***********every**********")
 var greaterthan = num => num > 12
 var array = [20, 22, 24, 34, 54, 65]
 console.log(array.every(greaterthan))


 console.log("***********some************")
 var greater = no => no > 3
 var arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 console.log(arry.some(greater))







 //.find
 //.findindexOf
 //.fill
 //.some
 //.every