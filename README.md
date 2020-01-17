This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 출처
이 프로젝트는 Microsoft에서 제공하는 [Typescript React Starter](https://github.com/microsoft/TypeScript-React-Starter) 를 참고했습니다.

## 이슈
원 코드에서 현재 버전과 호환되지 않는 부분이 있어 보완했습니다.

### /src/index.tsx

이건 issue #140 을 참고했습니다.
```
const store = createStore<StoreState>(enthusiasm, { 
...
```
createStore에서 `expected 4 type arguments but got 1` 라는 오류가 납니다.
```
const store = createStore<StoreState, EnthusiasmAction, any, any>(enthusiasm, {
...
```
으로 수정했습니다. 

### /src/reducer/index.tsx

위 issue에서 참고해서 함수의 args에 맞춰 수정했습니다.
```
export const enthusiasm: Reducer = (
  state: StoreState,
  action: EnthusiasmAction,
): StoreState => {
...
```

### /src/containers/Hello.tsx

```
import { connect, Dispatch } from 'react-redux';
```
에서 오류가 나서 확인했더니 Dispatch라는 친구가 없었습니다. :(
찾아보니 'redux'에서 import가 가능해서 그렇게 수정했습니다.
```
import { Dispatch } from 'redux';
```

