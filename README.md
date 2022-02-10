# wanted_pre_onboarding

## 1. Toggle

**구현 방법**

- `input` 태그의 `checkbox` 속성을 이용하여 버튼을 만들었습니다.

- `onChange` 이벤트가 발생하면 `useState` 함수를 통해 토글상태를 반전시키도록 ON/OFF 의 변화를 주었습니다.

- 체크박스의 `checked` 상태에 따라서 체크됐을 때 css로 토글 버튼에 변화를 줄 수 있도록 하였습니다.

<br/>

**문제와 해결**

- ON 으로 상태가 바뀔 때, 원과 함께 배경색도 따라가면서 채워지듯이 구현하려 했으나 원만 transition 되고, 배경색은 한번에 바뀌는 점
  - 애니메이션 keyframe을 통해서 채워지듯이 보완하면 좋을 것 같다.
