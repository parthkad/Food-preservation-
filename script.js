const knownFoods = {
  milk: {
    acid: "Lactic Acid",
    preservation_days: 7,
    reason: "Milk spoils due to bacterial growth, leading to souring and curdling.",
    prevention: "Store milk in the coldest part of the refrigerator. Keep it sealed and avoid temperature fluctuations."
  },
 flour: {
    acid: "Lactic Acid (from fermentation)",
    preservation_days: 365,
    reason: "Flour spoils due to oxidation of fats and mold growth.",
    prevention: "Store flour in a cool, dry place. Whole grain flour should be refrigerated or frozen."
  },
  frozen: {
    acid: "No significant acid",
    preservation_days: 180,
    reason: "Frozen foods spoil due to freezer burn, loss of texture, and microbial contamination if thawed improperly.",
    prevention: "Store at consistent freezing temperatures. Avoid repeated thawing and refreezing."
  },
  eggs: {
    acid: "No significant acid",
    preservation_days: 30,
    reason: "Eggs spoil due to bacterial contamination and moisture loss, leading to bad odor and discoloration.",
    prevention: "Store in the refrigerator at a consistent temperature. Keep eggs in their original carton."
  },
  chocolates: {
    acid: "Stearic Acid",
    preservation_days: 365,
    reason: "Chocolate spoils due to fat bloom (whitish coating) and loss of flavor from oxidation.",
    prevention: "Store in a cool, dark place. Avoid temperature fluctuations to prevent melting and blooming."
  },
  fruits: {
    acid: "Varies (e.g., Citric Acid in citrus fruits, Malic Acid in apples)",
    preservation_days: "Varies (3-30 days depending on the fruit)",
    reason: "Fruits spoil due to enzymatic activity, microbial growth, and moisture loss.",
    prevention: "Store per fruit type—refrigerate berries and apples, but keep bananas and citrus at room temperature."
  },
  vegetables: {
    acid: "Varies (e.g., Ascorbic Acid in carrots, Oxalic Acid in leafy greens)",
    preservation_days: "Varies (5-30 days depending on the vegetable)",
    reason: "Vegetables spoil due to moisture loss, microbial growth, and enzymatic reactions.",
    prevention: "Store in a cool place. Refrigerate leafy greens but keep root vegetables in a dry area."
  },
  masalas: {
    acid: "Varies (e.g., Capsaicin in chili powder, Curcumin in turmeric, Piperine in black pepper)",
    preservation_days: 365,
    reason: "Spices spoil due to exposure to air and moisture, leading to loss of flavor and aroma.",
    prevention: "Store in airtight containers in a cool, dry, and dark place to retain potency."
  },
  vinegar: {
    acid: "Acetic Acid",
    preservation_days: "Indefinite",
    reason: "Vinegar doesn't spoil but may develop a cloudy appearance due to harmless bacterial activity.",
    prevention: "Store in a cool, dark place. Keep the bottle tightly sealed to prevent contamination."
  },
  lemon: {
    acid: "Citric Acid",
    preservation_days: 10,
    reason: "Lemons spoil due to moisture loss, microbial growth, and oxidation.",
    prevention: "Store at room temperature for short-term use. Refrigerate in a sealed bag to extend shelf life."
  },
  fish: {
    acid: "No significant acid",
    preservation_days: 1,
    reason: "Fish spoils very quickly due to bacterial and enzymatic activity.",
    prevention: "Store on ice or in the coldest part of the fridge. Use or freeze within a day."
  },
  meat: {
    acid: "No significant acid",
    preservation_days: 3,
    reason: "Meat spoils due to microbial growth and oxidation of fats.",
    prevention: "Refrigerate immediately and consume within 2-3 days or freeze for longer storage."
  },
  tomatoes: {
    acid: "Citric and Malic Acids",
    preservation_days: 7,
    reason: "Tomatoes spoil from mold, fermentation, and skin breakdown.",
    prevention: "Store at room temperature away from direct sunlight. Refrigerate only when overripe."
  },
  "leafy greens": {
    acid: "Oxalic Acid",
    preservation_days: 5,
    reason: "Leafy greens wilt and spoil due to moisture loss and microbial growth.",
    prevention: "Wrap in paper towels and refrigerate in a perforated plastic bag."
  },
  cheese: {
    acid: "Lactic Acid",
    preservation_days: 14,
    reason: "Cheese spoils from mold and bacterial overgrowth.",
    prevention: "Wrap tightly and store in the fridge. Hard cheeses last longer than soft ones."
  },
  bread: {
    acid: "No significant acid",
    preservation_days: 5,
    reason: "Bread molds quickly in moist environments.",
    prevention: "Keep in a cool, dry place. Freeze to extend shelf life."
  },
  "citrus fruits": {
    acid: "Citric Acid",
    preservation_days: 14,
    reason: "Citrus fruits lose moisture and can mold at damaged spots.",
    prevention: "Store at room temperature or refrigerate to prolong freshness."
  },
  nuts: {
    acid: "No significant acid",
    preservation_days: 180,
    reason: "Nuts go rancid due to oxidation of oils.",
    prevention: "Store in airtight containers in a cool, dry place or refrigerate to extend shelf life."
  },
  juices: {
    acid: "Citric Acid or other fruit acids",
    preservation_days: 7,
    reason: "Juices spoil due to microbial growth and fermentation, especially once opened.",
    prevention: "Keep refrigerated and sealed. Pasteurized juices last longer unopened—up to 6 months."
  }
};

function analyzeFood() {
  const input = document.getElementById("foodInput").value.toLowerCase();
  const outputDiv = document.getElementById("output");
  const followupDiv = document.getElementById("followup");
  outputDiv.innerHTML = "";
  followupDiv.style.display = "none";
  document.getElementById("questions").innerHTML = "";

  if (knownFoods[input]) {
    const data = knownFoods[input];
    outputDiv.innerHTML = `
      <strong>Acid:</strong> ${data.acid}<br>
      <strong>Preservation Days:</strong> ${data.preservation_days}<br>
      <strong>Reason:</strong> ${data.reason}<br>
      <strong>Prevention:</strong> ${data.prevention}
    `;
  } else {
    followupDiv.style.display = "block";
    askFollowUp();
  }
}

function askFollowUp() {
  const qDiv = document.getElementById("questions");
  const questions = [
    { q: "Is it a frozen food (e.g., ice cream, frozen meat)?", response: "Frozen foods last 2-12 months if kept frozen." },
    { q: "Is it a sugary food (e.g., jam, honey, candy)?", response: "Sugary foods last 6-24 months if sealed properly." },
    { q: "Is it a baked good (e.g., cake, bread, cookies)?", response: "Baked goods last 3-7 days at room temp, up to 6 months if frozen." },
    { q: "Is it a dry food (e.g., biscuits, cereals, nuts)?", response: "Dry foods last 3-12 months in airtight containers." },
    { q: "Does it contain milk?", response: "Foods with milk spoil quickly. Estimated preservation: 3-7 days (refrigerated)." },
    { q: "Does it contain oil or fats?", response: "Oily foods can go rancid. Lasts 2-6 months depending on oil type." },
    { q: "Is it perishable (e.g., fresh dairy, cooked meals)?", response: "Perishable foods last 1-5 days and should be refrigerated." },
    { q: "Is it a drink?", response: "Juices last around 7 days (refrigerated) or up to 6 months if pasteurized and unopened." },
    { q: "Does it contain flour?", response: "If roti, then can be stored for 3-4 days" }
  ];

  questions.forEach((item, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p>${item.q}</p>
      <button onclick="showAnswer(${index})">Yes</button>
    `;
    qDiv.appendChild(div);
  });
}

function showAnswer(index) {
  const responses = [
    "Frozen foods last 2-12 months if kept frozen.",
    "Sugary foods last 6-24 months if sealed properly.",
    "Baked goods last 3-7 days at room temp, up to 6 months if frozen.",
    "Dry foods last 3-12 months in airtight containers.",
    "Foods with milk spoil quickly. Estimated preservation: 3-7 days (refrigerated).",
    "Oily foods can go rancid. Lasts 2-6 months depending on oil type.",
    "Perishable foods last 1-5 days and should be refrigerated.",
    "Juices last around 7 days (refrigerated) or up to 6 months if pasteurized and unopened."
  ];

  document.getElementById("output").innerHTML = `<strong>${responses[index]}</strong>`;
  document.getElementById("followup").style.display = "none";
  }
