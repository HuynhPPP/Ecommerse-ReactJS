import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

Codeium:efactor | Explain | Generate JSDoc | X
function calculateTimeLeft() {
const difference = +new Date(targetDate) - +new Date();
let timeLeft = (};

if (difference > 0) {
timeLeft = {
days: Math. floor(difference / (1000*60*60*24)),
hours: Math. floor((difference / (1000*60*60)) % 24),
minutes: Math.floor((difference / 1000 / 60) % 60),
seconds: Math. floor((difference / 1000) % 60)

return timeLeft;

useEffect(() => {
const timer = setTimeout(() => {
setTimeLeft(calculateTimeLeft());
}, 1000);

return () => clearTimeout(timer);