let heading = document.getElementById('head')
// console.log(heading)

// let heading1 = document.getElementsByClassName('head1')
// for(let i = 0; i<heading1.length ; i++) {
//     console.log(heading1[i])
// }
// const headingArray = Array.from(heading1);
// headingArray.map((head) => {
//     console.log(head)
// })

heading.innerHTML = "<span>sub ele </span>"
heading.textContent = "<span>sub   yu ele </span>"

console.log(heading.textContent)
console.log(heading.innerText)

heading.classList.add('newClass') 
// // Array of fruits
// const fruits = ["apple", "banana", "watermelom", "mango", "pineapple"]

// // ========== Using Array lenght ==========
// // Open the ordered list tag
// document.write('<ol>')
// // Loop through each fruit in the array
// for(let i = 0; i < fruits.length; i++) 
//     // Check if the index is less than 3
//     // If index is less than 3, write the fruit name in bold with green color
//     //  If index is 3 or more, write the fruit name underlined
//     // Close the ordered list tag
//     document.write(`
//     ${i < 3 ? `
//         <li>
//             <b style="color: green"> ${fruits[i]} </b>
//         </li> ` : 
//         `<li>
//             <u> ${fruits[i]} </u>
//         </li>`}
// `)
// document.write('</ol>')


// // ========== Using Map ========== 
// let i = 0
// document.write('<ol>') 

// fruits.map((fruit) => { // Iterate over each fruit in the array using the map method
//     document.write(`
//         ${i < 3 ? `
//             <li>
//                 <b style="color: blue"> ${fruit} </b>
//             </li> ` : 
//             `<li>
//                 <u> ${fruit} </u>
//             </li>`
//         }
//     `)
//     i++ // Increment the counter variable
// })
// document.write('</ol>')

