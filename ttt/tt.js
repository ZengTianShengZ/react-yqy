/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/5/5
 */
//
// const NUM_SECTIONS = 5;
// const NUM_ROWS_PER_SECTION = 5;
// let pageIndex = 0;
//
// const dataBlobs = {};
// let sectionIDs = [];
// let rowIDs = [];
// function genDatax(pIndex = 0) {
//   for (let i = 0; i < NUM_SECTIONS; i++) {
//     const ii = (pIndex * NUM_SECTIONS) + i;
//     const sectionName = `Section ${ii}`;
//     sectionIDs.push(sectionName);
//     dataBlobs[sectionName] = sectionName;
//     rowIDs[ii] = [];
//
//     for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
//       const rowName = `S${ii}, R${jj}`;
//       rowIDs[ii].push(rowName);
//       dataBlobs[rowName] = rowName;
//     }
//   }
//   sectionIDs = [...sectionIDs];
//   rowIDs = [...rowIDs];
// }
// console.log(dataBlobs)
//
// console.log(sectionIDs)
//
// console.log(rowIDs)



const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = (pIndex * NUM_ROWS) + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}
console.log(genData(3))
