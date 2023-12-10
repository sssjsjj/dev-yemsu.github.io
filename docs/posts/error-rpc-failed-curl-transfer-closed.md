![에러 발생화면](/posts/images/error-rpc-failed-curl-transfer-closed/i48g-231207-094802.png)


### 문제 상황

```
error: RPC failed; curl 56 OpenSSL SSL_read: Connection was reset, errno 10054
error: 4354 bytes of body are still expected
fetch-pack: unexpected disconnect while reading sideband packet
fatal: early EOF
fatal: fetch-pack: invalid index-pack output
```

- 새롭게 진행하는 프로젝트 git 저장소를 clone하려다 실패했다. 
- 저장소 크기가 너무 크거나 네트워크 상태가 안좋은 것이 원인. 나의 경우는 저장소 크기가 문제인 것으로 판단.

--- 

### ✅해결 : 특정 브랜치 depth 지정하여 클론

```cmd
git clone --single-branch --branch <branch_name> <repository_url> --depth=10
```

- <branch_name>에 가져오려는 특정 브랜치 이름을 지정하여 해당 브랜치만 클론
- depth를 10으로 지정하여 최신 10개 커밋만 가져온다

다양한 방법은 다 실패하고 이 방법은 바로 성공했다.  
clone이 필요한 브랜치가 main 브랜치라면 `--single-branch --branch <branch_name>` 구문은 생략해도 된다.  

만약 추가적으로 다른 브랜치를 가져와야 한다면 아래 커맨드를 입력하면 된다.

```cmd
git fetch origin <branch_name1>:<branch_name2>
```

원격의 `branch_name1`를 로컬의 `branch_name2`로 가져온다. 

---

### 💦시도 : git 타임아웃 설정 증가

```cmd
git config --global http.postBuffer 1048576000
git config --global http.lowSpeedLimit 0
git config --global http.lowSpeedTime 999999
```

시도해봤으나 아무 소용 없었다. 혹여나 다른분들을 위해 남겨둔다.

---

### 📌 참고
[error: RPC failed; curl transfer closed with outstanding read data remaining](https://stackoverflow.com/questions/38618885/error-rpc-failed-curl-transfer-closed-with-outstanding-read-data-remaining)