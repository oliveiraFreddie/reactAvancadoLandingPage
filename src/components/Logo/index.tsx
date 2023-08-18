import React from 'react'
import { LogoProps } from 'types/api'
import * as S from './styles'

const Logo = ({ data }: LogoProps) => {
  const { attributes } = data

  return <S.LogoWrapper src={attributes.url} alt={attributes.alternativeText} />
}

export default Logo
