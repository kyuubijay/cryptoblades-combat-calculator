function start() {
    //GET HERO DETAILS
    hero_power = document.getElementsByClassName('subtext subtext-stats')[0].innerText.split(': ')[1]
    console.log('HERO POWER: ', hero_power)

    //GET WEAPON DETAILS
    weapon_stats = document.getElementsByClassName('stats')[0].innerText
    weapon_trait = document.getElementsByClassName('trait')[0].children[0].className.replace('-icon','')
    console.log('WEAPON STAT: ', weapon_stats)
    console.log('WEAPON_TRAIT: ', weapon_trait)

    //GET ENEMIES' DETAILS
    enemies = document.getElementsByClassName('encounter-container')
    for(var i = 0; i < enemies.length; i++) {
        enemy_element = enemies[i].getElementsByClassName('encounter-element')[0].innerText
        enemy_power = enemies[i].getElementsByClassName('encounter-power')[0].innerText

        console.log('ENEMY ' + i+1 + ' ELEMENT: ' + enemy_element)
        console.log('ENEMY ' + i+1 + ' POWER: ' + enemy_power)
    }
  }
  
  chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: start
    });
  });