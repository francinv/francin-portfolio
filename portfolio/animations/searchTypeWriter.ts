export {}
/**
 * Iterate throug list wantedArray and for every element in the list,
 * the specific element should be iterate and update currentText with timeOut.
 * After the full specific element is added the currentText should be deleted one by one with timeOut.
 * When this is done the list will go to the next element.
 * 
 */
// export function searchTypeWriter(setText: (placeholder: string) => void) {
//     //Iterate through the list wantedArray
//     for (let i = 0; i < wantedArray.length; i++) {
//         console.log('i: ' + i);
//         //Iterate through the specific element in the list
//         for (let j = 0; j < wantedArray[i].length; j++) {
//             //Update currentText with timeOut
//             currentText += wantedArray[i].charAt(j);
//             setTimeout(() => {
//                 setText(currentText);
//             }, speed);
//         }
        
//        //Delete currentText one by one char.
//         for (let k = 0; k < currentText.length; k++) {
//             currentText = currentText.slice(0, -1);
//             console.log(currentText);
//             setTimeout(() => {
//                 setText(currentText);
//             }, speed * (i + 1) + speed * k);
//         }
//     }
// }



