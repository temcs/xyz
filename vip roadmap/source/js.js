// Data for VIP Levels and Benefits
const vipLevels = [
    { level: 1, benefits: "5 extra lives, 1 free power-up, 100 coins" },
    { level: 2, benefits: "2 free boosters, 10% discount on purchases" },
    { level: 3, benefits: "Exclusive avatars, 3 extra moves per level" },
    { level: 4, benefits: "Daily bonus: 50 coins, 1 free shuffle" },
    { level: 5, benefits: "New game mode, 5 free lollipop hammers" },
    // Add more levels here...
    { level: 50, benefits: "Legendary VIP: Unlock all benefits permanently, 5000 coins" }
  ];
  
  const roadmap = document.getElementById("roadmap");
  const progress = document.getElementById("progress");
  const currentLevel = document.getElementById("current-level");
  
  // Function to create level cards
  function createRoadmap() {
    vipLevels.forEach((vip) => {
      const levelCard = document.createElement("div");
      levelCard.classList.add("level");
      levelCard.innerHTML = `
        <h3>Level ${vip.level}</h3>
        <p>${vip.benefits}</p>
      `;
      roadmap.appendChild(levelCard);
    });
  }
  
  // Function to update progress bar
  function updateProgress(currentLevelNumber) {
    const totalLevels = vipLevels.length;
    const progressPercent = (currentLevelNumber / totalLevels) * 100;
    progress.style.width = `${progressPercent}%`;
    currentLevel.textContent = `Current Level: ${currentLevelNumber}`;
  }
  
  // Initialize
  createRoadmap();
  updateProgress(1); // Set initial level (e.g., Level 1)