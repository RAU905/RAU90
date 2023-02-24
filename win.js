// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1111);
//   }, 1000);
// });
// try {
//   console.log(tom);
// } catch (er) {
//   console.log(" your error is " + er);
// }
// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(222);
//   }, 8000);
// });
// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(3333);
//   }, 2000);
// });
// let y = prompt(" enter your age ");
// y = Number.parseInt(y);
// if (y > 190) {
//   try {
//     throw new Error(" it is ");
//   } catch (err) {
//     console.log(" the erroe is :-" + err);
//     console.log(" the erroe is :-" + err.name);

//     console.log(" the erroe is :-" + err.message);
//     console.log(" the erroe is :-" + err.stack);
//   }
// } else {
//   console.log(" yes your age is valid");
// }

// let loadscript = async (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = () => {
//       resolve(src);
//       console.log(" your script is " + src);
//     };
//     document.head.append(script);
//   });
// };
// let helo = async () => {
//   let a = await loadscript(
//     "https://drive.google.com/drive/folders/18_zQbPP3VgdK81Yl_WpFaH2OVKTxPzN0"
//   );
//   console.log(a);
// };
// helo().then(alert(" yes you have done"));

// let du = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error(" this is an error "));
//     }, 3000);
//   });
// };

// let a = async () => {
//   try {
//     let c = await du();
//     console.log(c);
//   } catch (err) {
//     console.log(" your error is " + err);
//   }
// };

// a().then(alert(" donne it is "));

// let p1 = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("i am p1");
//     }, 2000);
//   });
// };
// let p2 = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("i am p2");
//     }, 3000);
//   });
// };
// let p3 = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("i am p3");
//     }, 4000);
//   });
// };

// const fun2 = async () => {
//   console.time("fun2");

//   let a = await p1();
//   console.log(a);

//   let b = await p2();
//   console.log(b);

//   let c = await p3();
//   console.log(c);
//   // let a = p1();
//   // let b = p2();
//   // let c = p3();

//   // let d = await Promise.all([a, b, c]);
//   // console.log(d);
//   // let d = await Promise.all([a, b, c]);
//   // console.log(d);

//   console.timeEnd("fun2");
// };

// fun2();

// p1.then(console.log(" p1 done"));
// let a = await p1();
// console.log(a);

// let b = await p2();
// console.log(b);

// let c = await p3();
// console.log(c);
// p1.then(console.log(" p1 done"));

/// the code for ahckerman

// let p1 = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(" hi the mobile of shrishu kumar feching..... ");
//     }, 100);
//   });
// };
// let p2 = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(" hi the mobile of shrishu kumar feched  ");
//     }, 300);
//   });
// };
// let p3 = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(" the sim inserted in that mobile has number = 723194830 ");
//     }, 600);
//   });
// };
// let p4 = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(" the data from the mobile start receiving .... ");
//     }, 1000);
//   });
// };
// let p5 = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(" all the data from the mobile received successfully  ");
//     }, 1300);
//   });
// };
// let fun2 = async () => {
//   try {
//     let h1 = await p1();

//     // console.log(h1);

//     let h2 = await p2();
//     // console.log(h2);
//     let h3 = await p3();
//     // console.log(h3);
//     let h4 = await p4();
//     // console.log(h4);
//     let h5 = await p5();
//     // console.log(h5);

//     let final = await Promise.all([h1, h2, h3, h4, h5]);
//     console.log(final);
//     let output = document.getElementById("tom");
//     output.innerHTML = `
//    <p>${h1}</p>
//     <p>${h2}</p>
//     <p>${h3}</p>
//     <p>${h4}</p>
//     <p>${h5}</p>
//   `;
//   } catch (error) {
//     console.log(" your error is " + error);
//   }
// };
// fun2();

// chPTER 10 HOW TIOO FECT API FROM
// chPTER 10 HOW TIOO FECT API FROM
// chPTER 10 HOW TIOO FECT API FROM
// chPTER 10 HOW TIOO FECT API FROM
// chPTER 10 HOW TIOO FECT API FROM

// let p = fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
// p.then((response) => {
//   console.log(response.status);
//   console.log(response.ok);
//   console.log(response);
//   console.log(response.headers);

//   return response.json();
// }).then((value) => {
//   console.log(value);
// });

// // let res = fetch("https://api.coindesk.com/v1/bpi/currentprice.json", {
// //   headers: {
// //     Authenticaton: "secret",
// //   },
// // });
// let res = fetch("https://api.coindesk.com/v1/bpi/currentprice.json", {
//   headers: {
//     Authorization: "secret",
//   },
// });

// HOW TO USE OPTION IN API FOR POST REQUEST
// HOW TO USE OPTION IN API FOR POST REQUEST
// HOW TO USE OPTION IN API FOR POST REQUEST
// HOW TO USE OPTION IN API FOR POST REQUEST
// HOW TO USE OPTION IN API FOR POST REQUEST

// const creattodo = async (todo) => {
//   let options = {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(todo),
//   };

//   let p = await fetch("https://jsonplaceholder.typicode.com/todos/1", Option);
//   let responce = await p.json();
//   return responce;
// };
// const todo2 = async () => {
//   let todo = {
//     title: "heloo",
//     body: "bhai",
//     userId: 1912928,
//   };
//   let todor = await creattodo(todo);
//   console.log(todor);
// };

// todo2();

// cookie how to use cookies in js

// console.log(document.cookie);
// document.cookie = `encode nam/:=32#%7e= ragausdd dikds2345678903456789`;
// console.log(document.cookie);
// document.cookie = "name2= ragausd78903456789";

// console.log(document.cookie);
// local storage

// local storage
// local storage
// local storage
// local storage

// let a = prompt("enter the key");
// let b = prompt("enter the value");
// localStorage.setItem(a, b);
// console.log(`the value at ${a} is ${b} `);
// console.log("The value at " + a + " is " + b);
// if (a === "red") {
//   localStorage.removeItem(a);
// // }
// window.onstorage = (s) => {
//   alert("changed");
//   console.log(s);
// };

// const contestimage = {
//   name: "My Contest",
//   imageUrl: "practiseWIN_20211010_10_55_34_Pro.jpg",
//   url: "https://example.https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fcoding&psig=AOvVaw00r-LkxAiWXeDv6ObIebjU&ust=1677318749297000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCUvrTxrf0CFQAAAAAdAAAAABAD/my-contest",
// };
// let p = fetch("https://kontests.net/api/v1/all");

// p.then((v) => {
//   return v.json();
// }).then((contest) => {
//   console.log(contest);
//   ihtml = "";
//   for (item in contest) {
//     console.log(contest[item]);
//     const imageUrl = `path/to/image-${contest[item].id}.jpg`; // replace with your image path pattern
//     ihtml += ` <div class="card"   >
//         <img src="${imageUrl}" alt="..." />
//         <div class="card-body">
//           <h5 class="card-title">${contest[item].name}</h5>
//           <p class="card-text">
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </p>
//           <a href="${contest[item].url}" class="btn btn-primary">Visit contest</a>
//         </div> </div>`;
//   }
//   cardContainer.innerHTML = ihtml;
// });

let p = fetch("https://kontests.net/api/v1/all");

p.then((v) => {
  return v.json();
}).then((contest) => {
  console.log(contest);
  ihtml = "";
  for (item in contest) {
    console.log(contest[item]);
    ihtml += ` <div class="card"   >
        <img src="code-944499__340.jpg" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${contest[item].name}</h5>
          <p class="card-text">
          <h5>End time=${contest[item].end_time} </h5>
  <h5>In 24HR = ${contest[item].in_24_hours} </h5>
          </p>
          <a href="${contest[item].url}" class="btn btn-primary">Visit contest</a>
        </div> </div>`;
  }
  cardContainer.innerHTML = ihtml;
});
