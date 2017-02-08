const express = require('express');
const router = express.Router();
const app = express();
const bubbleSort = require('../modules/bubbleSort.js');
const quickSort= require('../modules/quickSort.js');
const insertionSort = require('../modules/insertion.js');
const selectionSort = require('../modules/selectionSort.js');
const mergeSort = require('../modules/mergeSort.js');

router.post('/bubbleSort', (req, res) => {
  let sortedArray = bubbleSort(JSON.parse(req.body.array));
  res.send(`Bubble Sort\n${sortedArray}`);
});

router.post('/quickSort', (req, res) => {
  let sortedArray = quickSort(JSON.parse(req.body.array));
  res.send(`Quick Sort\n${sortedArray}`);
});

router.post('/insertionSort', (req, res) => {
  let sortedArray = insertionSort(JSON.parse(req.body.array));
  res.send(`Insertion Sort\n${sortedArray}`);
});

router.post('/selectionSort', (req, res) => {
  let sortedArray = selectionSort(JSON.parse(req.body.array));
  res.send(`Selection Sort\n${sortedArray}`);
});

router.post('/mergeSort', (req, res) => {
  let sortedArray = mergeSort(JSON.parse(req.body.array));
  res.send(`Merge Sort\n${sortedArray}`);
});


module.exports = router;