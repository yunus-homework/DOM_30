(function () {
  let arr = [];
  for (let liElement of document.querySelectorAll("li")) {
    arr.push(liElement.firstChild.data);
  }
  return console.log(arr);
})();

//или в цикле for...of можно использовать getElementsByTagName

// У нас есть дерево, структурированное как вложенные списки ul/li.

// Напишите код, который выведет каждый элемент списка в консоль :

// Используйте цикл for..of
// Вывести общее кол-во элементов в консоль
// Вытянуть текст из тегов li и записать текст содержащийся в
// каждом элементе в массив — вывести этот массив в консоль
