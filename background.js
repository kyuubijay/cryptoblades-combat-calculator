function start() {
  const earthTrait = 0,
    ligthingTrait = 1,
    waterTrait = 2,
    fireTrait = 3,
    powerTrait = 4;

    function t(t, a, e) {
      let i = 1;
      var r, n;
      return (
          t == a && (i += 0.075),
          (n = e),
          (((r = t) == fireTrait && n == earthTrait) || (r == waterTrait && n == fireTrait) || (r == ligthingTrait && n == waterTrait) || (r == earthTrait && n == ligthingTrait)) && (i += 0.075),
          (function (t, a) {
              return (t == fireTrait && a == waterTrait) || (t == waterTrait && a == ligthingTrait) || (t == ligthingTrait && a == earthTrait) || (t == earthTrait && a == fireTrait);
          })(t, e) && (i -= 0.075),
          i
      );
  }
  function a(t, a) {
      return (t = Math.ceil(t)), (a = Math.floor(a)), Math.floor(Math.random() * (a - t + 1)) + t;
  }

  function getWeaponTrait(weapon_desc) {
    switch(weapon_desc) {
      case 'dex': weap_trait = 0; break;
      case 'cha': weap_trait = 1; break;
      case 'int': weap_trait = 2; break;
      case 'str': weap_trait = 3; break;
      case 'pwr': weap_trait = 4; break;
      default: weap_trait = 0; break;
    }

    return weap_trait
  }

    //GET HERO DETAILS
    hero_power = document.getElementsByClassName('subtext subtext-stats')[0].innerText.split(': ')[1]
    hero_power = hero_power.replace(',','')
    hero_trait_string = document.getElementsByClassName('name bold character-name')[0].children[0].className.split(' ')[0].replace('-icon','').toLowerCase()
    hero_trait = 0

    switch(hero_trait_string) {
      case 'earth': hero_trait = 0; break;
      case 'lightning': hero_trait = 1; break;
      case 'water': hero_trait = 2; break;
      case 'fire': hero_trait = 3; break;
      default: hero_trait = 0; break;
    }
    
    //GET WEAPON DETAILS
    weapon_trait = 0
    weapon_bonus_power = 0
    weapon_stat_string = document.getElementsByClassName('stats')[0].innerText.toLowerCase().split('\n')
    weapon_trait_string = document.getElementsByClassName('trait')[0].children[0].className.replace('-icon','').toLowerCase()

    
    
    weapon_stat_1_string = weapon_stat_string.length >= 1 ? weapon_stat_string[0].split(' ')[0] : 0
    weapon_stat_2_string = weapon_stat_string.length >= 2 ? weapon_stat_string[1].split(' ')[0] : 0
    weapon_stat_3_string = weapon_stat_string.length >= 3 ? weapon_stat_string[2].split(' ')[0] : 0

    weapon_stat_1_power = weapon_stat_string.length >= 1 ? parseInt(weapon_stat_string[0].split(' ')[1]) : 0
    weapon_stat_2_power = weapon_stat_string.length >= 2 ? parseInt(weapon_stat_string[1].split(' ')[1]) : 0
    weapon_stat_3_power = weapon_stat_string.length >= 3 ? parseInt(weapon_stat_string[2].split(' ')[1]) : 0

    weapon_stat_1_trait = getWeaponTrait(weapon_stat_1_string)
    weapon_stat_2_trait = getWeaponTrait(weapon_stat_2_string)
    weapon_stat_3_trait = getWeaponTrait(weapon_stat_3_string)

    switch(weapon_trait_string) {
      case 'earth': weapon_trait = 0; break;
      case 'lightning': weapon_trait = 1; break;
      case 'water': weapon_trait = 2; break;
      case 'fire': weapon_trait = 3; break;
      case 'power': weapon_trait = 4; break;
      default: weapon_trait = 0; break;
    }

    //GET ENEMIES' DETAILS
    enemies1 = document.getElementsByClassName('encounter-container')
    enemies = []
    for(var i = 0; i < enemies1.length; i++) {
        enemy_element_string = enemies1[i].getElementsByClassName('encounter-element')[0].children[0].className.toLowerCase().replace('-icon','')
        enemy_power = enemies1[i].getElementsByClassName('encounter-power')[0].innerText.split(' ')[0]
        enemy_element = 0
      console.log('enemy'+i,enemy_element_string)
      switch(enemy_element_string) {
        case 'earth': enemy_element = 0; break;
        case 'lightning': enemy_element = 1; break;
        case 'water': enemy_element = 2; break;
        case 'fire': enemy_element = 3; break;
        default: enemy_element = 0; break;
      }

        enemies.push({'element': enemy_element, 'power': enemy_power})
    }

    console.log('hero_trait', hero_trait)
    console.log('hero_power', hero_power)
    console.log('weapon_trait',weapon_trait)
    console.log('weapon_stat_1_trait',weapon_stat_1_trait)
    console.log('weapon_stat_1_power',weapon_stat_1_power)
    console.log('weapon_stat_2_trait',weapon_stat_2_trait)
    console.log('weapon_stat_2_power',weapon_stat_2_power)
    console.log('weapon_stat_3_trait',weapon_stat_3_trait)
    console.log('weapon_stat_3_power',weapon_stat_3_power)
    for(var ii=0; ii<enemies.length; ii++) {
      console.log('enemy'+(ii+1)+' element',enemies[ii].element)
      console.log('enemy'+(ii+1)+' power',enemies[ii].power)
    }
    
    // console.log('',)
    // console.log('',)
    // console.log('',)
    // console.log('',)
    // console.log('',)
    // console.log('',)

    try {
      let e = hero_trait,
          i = weapon_trait,
          r = weapon_stat_1_trait,
          n = weapon_stat_2_trait,
          o = weapon_stat_3_trait,
          s = parseInt(enemies[0].element),
          p = parseInt(enemies[1].element),
          c = parseInt(enemies[2].element),
          d = parseInt(enemies[3].element);
      !(function (e, i, r, n, o, s, p, c, d, l, h, T, w, u, g, f, v, k) {
          let m,
              b,
              I = (function (t, a, e, i, r, n, o) {
                  let s = 1;
                  a > 0 && e >= 0 && (s += e == t ? 0.0026750000000000003 * a : e == powerTrait ? 0.002575 * a : 0.0025 * a);
                  i > 0 && r >= 0 && (s += r == t ? 0.0026750000000000003 * i : r == powerTrait ? 0.002575 * i : 0.0025 * i);
                  n > 0 && o >= 0 && (s += o == t ? 0.0026750000000000003 * n : o == powerTrait ? 0.002575 * n : 0.0025 * n);
                  return s;
              })(n, o, s, p, c, d, l),
              y = e * I + r,
              x = Math.ceil(h - 0.1 * h),
              M = Math.floor(h + 0.1 * h),
              W = Math.ceil(y - 0.1 * y),
              P = Math.floor(y + 0.1 * y),
              F = Math.ceil(w - 0.1 * w),
              E = Math.floor(w + 0.1 * w),
              C = Math.ceil(y - 0.1 * y),
              L = Math.floor(y + 0.1 * y),
              R = Math.ceil(g - 0.1 * g),
              B = Math.floor(g + 0.1 * g),
              H = Math.ceil(y - 0.1 * y),
              N = Math.floor(y + 0.1 * y),
              D = Math.ceil(v - 0.1 * v),
              A = Math.floor(v + 0.1 * v),
              G = Math.ceil(y - 0.1 * y),
              J = Math.floor(y + 0.1 * y),
              O = t(i, n, T),
              S = t(i, n, u),
              U = t(i, n, f),
              _ = t(i, n, k),
              j = 0,
              q = 0,
              z = 0,
              K = 0;
          for (let t = 0; t < 500; t++)
              (m = a(W, P) * O), (b = a(x, M)), m >= b && j++, (m = a(C, L) * S), (b = a(F, E)), m >= b && q++, (m = a(H, N) * U), (b = a(R, B)), m >= b && z++, (m = a(G, J) * _), (b = a(D, A)), m >= b && K++;
          chances = [j, q, z, K]
          for(var tt = 0; tt < enemies1.length; tt++) {
            // chance_text = enemies1[tt].getElementsByClassName('victory-chance')[0].innerText.split('(')[0].trim()
            chance = ((chances[tt] / 500) * 100).toFixed(2) + " %"
            enemies1[tt].getElementsByClassName('victory-chance')[0].innerText = chance
          }
      })(
          parseFloat(hero_power),
          e,
          parseFloat(weapon_bonus_power),
          i,
          parseFloat(weapon_stat_1_power),
          r,
          parseFloat(weapon_stat_2_power),
          n,
          parseFloat(weapon_stat_3_power),
          o,
          parseFloat(enemies[0].power),
          s,
          parseFloat(enemies[1].power),
          p,
          parseFloat(enemies[2].power),
          c,
          parseFloat(enemies[3].power),
          d
      );
    } catch (t) {
        console.log('Warning: Error in parsing inputs, all stats and powers must be defined.')
    }


    
  }
  
  chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: start
    });
  });
