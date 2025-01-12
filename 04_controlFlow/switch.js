// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan": // note case sentive hai so jan and Jan alag hai
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break; // If we dont use break here then after key is matched sare ke sare case ko bina check kare execute kar dega JS except default
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}