# Git Config

### Git Config란? 
Git Repository의 동작과 커밋 정보를 관리할 수 있다. 
주로 사용자 정보와 Git 설정을 정의할 수 있다. 

### 주요 역할
- 커밋 작성자의 이름과 이메일 설정.
- 줄바꿈 방식, 머지 전략, diff 툴 등 Git 동작 방식 제어.
- 글로벌, 시스템, 로컬 리포지토리별 설정 가능.

### 설정 범위
세 가지 범위로 설정을 적용할 수 있다. 
- **로컬 설정 (--local)**: 현재 저장소만 적용 
- **글로벌 설정 (--global)**: 현재 사용자의 모든 저장소에 적용
- **시스템 설정 (--system)**: 모든 사용자와 모든 저장소에 적용 

### 설정 파일 위치 
- **로컬 설정**: .git/config
- **글로벌 설정**: ~/.gitconfig 또는 ~/.config/git/config
- **시스템 설정**: /etc/gitconfig

### 명령어

1. 설정된 config 확인
```bash
# 시스템, 글로벌, 로컬 설정을 모두 포함한 목록이 출력
git config --list 

# 로컬 설정 확인 
git config --list --local

# 글로벌 설정 확인
git config --list --global

# 시스템 설정 확인
git config --list --system
```


2. 사용자 이름/이메일 확인
```bash
# 로컬 사용자 이름/이메일
git config --local --get user.name
git config --local --get user.email

# 글로벌 사용자 이름/이메일
git config --global --get user.name
git config --global --get user.email
```

3. 사용자 이름/이메일 등록
```bash
# 로컬 사용자 이름/이메일
git config --local user.name "이름"
git config --local user.email "이메일"

# 글로벌 사용자 이름/이메일
git config --global user.name "이름"
git config --global user.email "이메일"
```

4. 사용자 이름/이메일 삭제
```bash
# 로컬 사용자 이름/이메일
git config --unset --local user.name "이름"
git config --unset --local user.email "이메일"

# 글로벌 사용자 이름/이메일
git config --unset --global user.name "이름"
git config --unset --global user.email "이메일"
```

삭제 시 중복값이 있을때는 `--unset-all` 사용! 