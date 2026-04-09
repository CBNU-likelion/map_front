export const DEFAULT_SCHOOL_NAME = '충북대학교'
const MY_UNIVERSITY_ID_KEY = 'myUniversityId'
const MY_UNIVERSITY_NAME_KEY = 'myUniversityName'

export const regionMarkers = [
  {
    id: 'seoul',
    name: '서울',
    displayName: '서울특별시',
    provinceQuery: '서울',
    top: '24%',
    left: '38%',
  },
  {
    id: 'gyeonggi',
    name: '경기',
    displayName: '경기도',
    provinceQuery: '경기',
    top: '31%',
    left: '30%',
  },
  {
    id: 'gangwon',
    name: '강원',
    displayName: '강원특별자치도',
    provinceQuery: '강원',
    top: '23%',
    left: '68%',
  },
  {
    id: 'chungcheong',
    name: '충청',
    displayName: '충청권',
    provinceQuery: '충청',
    top: '42%',
    left: '44%',
  },
  {
    id: 'jeolla',
    name: '전라',
    displayName: '전북특별자치도',
    provinceQuery: '전북',
    top: '58%',
    left: '28%',
  },
  {
    id: 'gyeongsang',
    name: '경상',
    displayName: '경상권',
    provinceQuery: '경상',
    top: '45%',
    left: '74%',
  },
  {
    id: 'south',
    name: '남해안',
    displayName: '남해안 권역',
    provinceQuery: '경상',
    top: '66%',
    left: '57%',
  },
  {
    id: 'jeju',
    name: '제주',
    displayName: '제주특별자치도',
    provinceQuery: '제주',
    top: '85%',
    left: '20%',
  },
]

function canUseStorage() {
  return typeof window !== 'undefined'
}

export function getStoredSchool() {
  if (!canUseStorage()) {
    return DEFAULT_SCHOOL_NAME
  }

  return window.localStorage.getItem(MY_UNIVERSITY_NAME_KEY) || DEFAULT_SCHOOL_NAME
}

export function getStoredSchoolId() {
  if (!canUseStorage()) {
    return null
  }

  const value = window.localStorage.getItem(MY_UNIVERSITY_ID_KEY)
  return value ? Number(value) : null
}

export function setStoredSchool(university) {
  if (!canUseStorage()) {
    return
  }

  if (typeof university === 'string') {
    window.localStorage.setItem(MY_UNIVERSITY_NAME_KEY, university)
    return
  }

  if (university?.id) {
    window.localStorage.setItem(MY_UNIVERSITY_ID_KEY, String(university.id))
  }

  if (university?.name) {
    window.localStorage.setItem(MY_UNIVERSITY_NAME_KEY, university.name)
  }
}

export function hasContributed(universityId) {
  if (!canUseStorage() || !universityId) {
    return false
  }

  return window.localStorage.getItem(`contributed_${universityId}`) === 'true'
}

export function markContributed(universityId) {
  if (!canUseStorage() || !universityId) {
    return
  }

  window.localStorage.setItem(`contributed_${universityId}`, 'true')
}

export function getRegionById(regionId) {
  return regionMarkers.find((region) => region.id === regionId) || regionMarkers[0]
}

export function deriveMood(fearScore) {
  if (fearScore >= 88) return '아 진짜 망했다'
  if (fearScore >= 80) return '숨 참고 버티는 중'
  if (fearScore >= 72) return '그래도 시작은 함'
  return '아직은 해볼 만함'
}

export function getRegionByProvince(province) {
  if (!province) {
    return getRegionById('chungcheong')
  }

  return (
    regionMarkers.find((region) => province.includes(region.provinceQuery) || region.displayName.includes(province)) ||
    getRegionById('chungcheong')
  )
}
