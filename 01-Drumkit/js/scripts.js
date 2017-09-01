const playSound = (e) =>{
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  playAudio(audio, key)
  const keys = document.querySelectorAll('.key')
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))
}

const playAudio = (audio, key)=>{
  if(!audio) return
  audio.currentTime = 0
  audio.play()
  key.classList.add('playing')
}

const removeTransition = (e)=>{
  if(e.propertyName !== 'transform') return
  e.srcElement.classList.remove('playing')
}

window.addEventListener('keydown', playSound)
