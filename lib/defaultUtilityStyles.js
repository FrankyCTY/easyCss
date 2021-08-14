"use strict";

var defaultUtilityStyles = {
  'content-start': {
    alignContent: 'flex-start'
  },
  'content-end': {
    alignContent: 'flex-end'
  },
  'content-center': {
    alignContent: 'center'
  },
  'content-between': {
    alignContent: 'space-between'
  },
  'content-around': {
    alignContent: 'space-around'
  },
  'items-stretch': {
    alignItems: 'stretch'
  },
  'items-start': {
    alignItems: 'flex-start'
  },
  'items-end': {
    alignItems: 'flex-end'
  },
  'items-center': {
    alignItems: 'center'
  },
  'items-baseline': {
    alignItems: 'baseline'
  },
  'self-auto': {
    alignSelf: 'auto'
  },
  'self-start': {
    alignSelf: 'flex-start'
  },
  'self-end': {
    alignSelf: 'flex-end'
  },
  'self-center': {
    alignSelf: 'center'
  },
  'self-stretch': {
    alignSelf: 'stretch'
  },
  'self-baseline': {
    alignSelf: 'baseline'
  },
  'bg-transparent': {
    backgroundColor: 'transparent'
  },
  'bg-black': {
    backgroundColor: '#000000'
  },
  'bg-near-black': {
    backgroundColor: '#1c2227'
  },
  'bg-grey-darkest': {
    backgroundColor: '#3d4852'
  },
  'bg-grey-darker': {
    backgroundColor: '#606f7b'
  },
  'bg-grey-dark': {
    backgroundColor: '#8795a1'
  },
  'bg-grey': {
    backgroundColor: '#b8c2cc'
  },
  'bg-grey-light': {
    backgroundColor: '#dae1e7'
  },
  'bg-grey-lighter': {
    backgroundColor: '#f1f5f8'
  },
  'bg-grey-lightest': {
    backgroundColor: '#f8fafc'
  },
  'bg-white': {
    backgroundColor: '#ffffff'
  },
  'bg-red-darkest': {
    backgroundColor: '#3b0d0c'
  },
  'bg-red-darker': {
    backgroundColor: '#621b18'
  },
  'bg-red-dark': {
    backgroundColor: '#cc1f1a'
  },
  'bg-red': {
    backgroundColor: '#e3342f'
  },
  'bg-red-light': {
    backgroundColor: '#ef5753'
  },
  'bg-red-lighter': {
    backgroundColor: '#f9acaa'
  },
  'bg-red-lightest': {
    backgroundColor: '#fcebea'
  },
  'bg-orange-darkest': {
    backgroundColor: '#462a16'
  },
  'bg-orange-darker': {
    backgroundColor: '#613b1f'
  },
  'bg-orange-dark': {
    backgroundColor: '#de751f'
  },
  'bg-orange': {
    backgroundColor: '#f6993f'
  },
  'bg-orange-light': {
    backgroundColor: '#faad63'
  },
  'bg-orange-lighter': {
    backgroundColor: '#fcd9b6'
  },
  'bg-orange-lightest': {
    backgroundColor: '#fff5eb'
  },
  'bg-yellow-darkest': {
    backgroundColor: '#453411'
  },
  'bg-yellow-darker': {
    backgroundColor: '#684f1d'
  },
  'bg-yellow-dark': {
    backgroundColor: '#f2d024'
  },
  'bg-yellow': {
    backgroundColor: '#ffed4a'
  },
  'bg-yellow-light': {
    backgroundColor: '#fff382'
  },
  'bg-yellow-lighter': {
    backgroundColor: '#fff9c2'
  },
  'bg-yellow-lightest': {
    backgroundColor: '#fcfbeb'
  },
  'bg-green-darkest': {
    backgroundColor: '#0f2f21'
  },
  'bg-green-darker': {
    backgroundColor: '#1a4731'
  },
  'bg-green-dark': {
    backgroundColor: '#1f9d55'
  },
  'bg-green': {
    backgroundColor: '#38c172'
  },
  'bg-green-light': {
    backgroundColor: '#51d88a'
  },
  'bg-green-lighter': {
    backgroundColor: '#a2f5bf'
  },
  'bg-green-lightest': {
    backgroundColor: '#e3fcec'
  },
  'bg-teal-darkest': {
    backgroundColor: '#0d3331'
  },
  'bg-teal-darker': {
    backgroundColor: '#20504f'
  },
  'bg-teal-dark': {
    backgroundColor: '#38a89d'
  },
  'bg-teal': {
    backgroundColor: '#4dc0b5'
  },
  'bg-teal-light': {
    backgroundColor: '#64d5ca'
  },
  'bg-teal-lighter': {
    backgroundColor: '#a0f0ed'
  },
  'bg-teal-lightest': {
    backgroundColor: '#e8fffe'
  },
  'bg-blue-darkest': {
    backgroundColor: '#12283a'
  },
  'bg-blue-darker': {
    backgroundColor: '#1c3d5a'
  },
  'bg-blue-dark': {
    backgroundColor: '#2779bd'
  },
  'bg-blue': {
    backgroundColor: '#3490dc'
  },
  'bg-blue-light': {
    backgroundColor: '#6cb2eb'
  },
  'bg-blue-lighter': {
    backgroundColor: '#bcdefa'
  },
  'bg-blue-lightest': {
    backgroundColor: '#eff8ff'
  },
  'bg-indigo-darkest': {
    backgroundColor: '#191e38'
  },
  'bg-indigo-darker': {
    backgroundColor: '#2f365f'
  },
  'bg-indigo-dark': {
    backgroundColor: '#5661b3'
  },
  'bg-indigo': {
    backgroundColor: '#6574cd'
  },
  'bg-indigo-light': {
    backgroundColor: '#7886d7'
  },
  'bg-indigo-lighter': {
    backgroundColor: '#b2b7ff'
  },
  'bg-indigo-lightest': {
    backgroundColor: '#e6e8ff'
  },
  'bg-purple-darkest': {
    backgroundColor: '#21183c'
  },
  'bg-purple-darker': {
    backgroundColor: '#382b5f'
  },
  'bg-purple-dark': {
    backgroundColor: '#794acf'
  },
  'bg-purple': {
    backgroundColor: '#9561e2'
  },
  'bg-purple-light': {
    backgroundColor: '#a779e9'
  },
  'bg-purple-lighter': {
    backgroundColor: '#d6bbfc'
  },
  'bg-purple-lightest': {
    backgroundColor: '#f3ebff'
  },
  'bg-pink-darkest': {
    backgroundColor: '#451225'
  },
  'bg-pink-darker': {
    backgroundColor: '#6f213f'
  },
  'bg-pink-dark': {
    backgroundColor: '#eb5286'
  },
  'bg-pink': {
    backgroundColor: '#f66d9b'
  },
  'bg-pink-light': {
    backgroundColor: '#fa7ea8'
  },
  'bg-pink-lighter': {
    backgroundColor: '#ffbbca'
  },
  'bg-pink-lightest': {
    backgroundColor: '#ffebef'
  },
  'bg-primary': {
    backgroundColor: '#58C6BD'
  },
  'bg-secondary': {
    backgroundColor: '#EF9B4A'
  },
  'bg-green-50': {
    backgroundColor: '#F7FCFC'
  },
  'bg-green-100': {
    backgroundColor: '#CAEDEA'
  },
  'bg-green-200': {
    backgroundColor: '#A4E0DB'
  },
  'bg-green-300': {
    backgroundColor: '#7ED3CC'
  },
  'bg-green-400': {
    backgroundColor: '#58C6BD'
  },
  'bg-green-500': {
    backgroundColor: '#58C6BD'
  },
  'bg-green-600': {
    backgroundColor: '#2F8982'
  },
  'bg-green-700': {
    backgroundColor: '#22635E'
  },
  'bg-green-800': {
    backgroundColor: '#153D3A'
  },
  'bg-green-900': {
    backgroundColor: '#081716'
  },
  'bg-grey-50': {
    backgroundColor: '#F8FAFC'
  },
  'bg-grey-100': {
    backgroundColor: '#F1F5F9'
  },
  'bg-grey-200': {
    backgroundColor: '#E2E8F0'
  },
  'bg-grey-300': {
    backgroundColor: '#CBD5E1'
  },
  'bg-grey-400': {
    backgroundColor: '#94A3B8'
  },
  'bg-grey-500': {
    backgroundColor: '#64748B'
  },
  'bg-grey-600': {
    backgroundColor: '#475569'
  },
  'bg-grey-700': {
    backgroundColor: '#334155'
  },
  'bg-grey-800': {
    backgroundColor: '#1E293B'
  },
  'bg-grey-900': {
    backgroundColor: '#0F172A'
  },
  'bg-error-50': {
    backgroundColor: '#FFF5F6'
  },
  'bg-error-100': {
    backgroundColor: '#FCC5CA'
  },
  'bg-error-200': {
    backgroundColor: '#FA949D'
  },
  'bg-error-300': {
    backgroundColor: '#F86371'
  },
  'bg-error-400': {
    backgroundColor: '#F53244'
  },
  'bg-error-500': {
    backgroundColor: '#E90B1F'
  },
  'bg-error-600': {
    backgroundColor: '#B90919'
  },
  'bg-error-700': {
    backgroundColor: '#880612'
  },
  'bg-error-800': {
    backgroundColor: '#58040C'
  },
  'bg-error-900': {
    backgroundColor: '#270205'
  },
  'bg-success-50': {
    backgroundColor: '#EEFAE6'
  },
  'bg-success-100': {
    backgroundColor: '#D2F1BB'
  },
  'bg-success-200': {
    backgroundColor: '#B5E991'
  },
  'bg-success-300': {
    backgroundColor: '#99E066'
  },
  'bg-success-400': {
    backgroundColor: '#7CD83C'
  },
  'bg-success-500': {
    backgroundColor: '#64BC26'
  },
  'bg-success-600': {
    backgroundColor: '#4D901D'
  },
  'bg-success-700': {
    backgroundColor: '#366615'
  },
  'bg-success-800': {
    backgroundColor: '#203B0C'
  },
  'bg-success-900': {
    backgroundColor: '#09110'
  },
  'bg-warning-50': {
    backgroundColor: '#FFFDF5'
  },
  'bg-warning-100': {
    backgroundColor: '#FEF0C3'
  },
  'bg-warning-200': {
    backgroundColor: '#FCE491'
  },
  'bg-warning-300': {
    backgroundColor: '#FBD760'
  },
  'bg-warning-400': {
    backgroundColor: '#FACB2F'
  },
  'bg-warning-500': {
    backgroundColor: '#EFB906'
  },
  'bg-warning-600': {
    backgroundColor: '#BD9205'
  },
  'bg-warning-700': {
    backgroundColor: '#8B6C03'
  },
  'bg-warning-800': {
    backgroundColor: '#5A4502'
  },
  'bg-warning-900': {
    backgroundColor: '#281F01'
  },
  'border-transparent': {
    borderColor: 'transparent'
  },
  'border-black': {
    borderColor: '#000000'
  },
  'border-near-black': {
    borderColor: '#1c2227'
  },
  'border-grey-darkest': {
    borderColor: '#3d4852'
  },
  'border-grey-darker': {
    borderColor: '#606f7b'
  },
  'border-grey-dark': {
    borderColor: '#8795a1'
  },
  'border-grey': {
    borderColor: '#b8c2cc'
  },
  'border-grey-light': {
    borderColor: '#dae1e7'
  },
  'border-grey-lighter': {
    borderColor: '#f1f5f8'
  },
  'border-grey-lightest': {
    borderColor: '#f8fafc'
  },
  'border-white': {
    borderColor: '#ffffff'
  },
  'border-red-darkest': {
    borderColor: '#3b0d0c'
  },
  'border-red-darker': {
    borderColor: '#621b18'
  },
  'border-red-dark': {
    borderColor: '#cc1f1a'
  },
  'border-red': {
    borderColor: '#e3342f'
  },
  'border-red-light': {
    borderColor: '#ef5753'
  },
  'border-red-lighter': {
    borderColor: '#f9acaa'
  },
  'border-red-lightest': {
    borderColor: '#fcebea'
  },
  'border-orange-darkest': {
    borderColor: '#462a16'
  },
  'border-orange-darker': {
    borderColor: '#613b1f'
  },
  'border-orange-dark': {
    borderColor: '#de751f'
  },
  'border-orange': {
    borderColor: '#f6993f'
  },
  'border-orange-light': {
    borderColor: '#faad63'
  },
  'border-orange-lighter': {
    borderColor: '#fcd9b6'
  },
  'border-orange-lightest': {
    borderColor: '#fff5eb'
  },
  'border-yellow-darkest': {
    borderColor: '#453411'
  },
  'border-yellow-darker': {
    borderColor: '#684f1d'
  },
  'border-yellow-dark': {
    borderColor: '#f2d024'
  },
  'border-yellow': {
    borderColor: '#ffed4a'
  },
  'border-yellow-light': {
    borderColor: '#fff382'
  },
  'border-yellow-lighter': {
    borderColor: '#fff9c2'
  },
  'border-yellow-lightest': {
    borderColor: '#fcfbeb'
  },
  'border-green-darkest': {
    borderColor: '#0f2f21'
  },
  'border-green-darker': {
    borderColor: '#1a4731'
  },
  'border-green-dark': {
    borderColor: '#1f9d55'
  },
  'border-green': {
    borderColor: '#38c172'
  },
  'border-green-light': {
    borderColor: '#51d88a'
  },
  'border-green-lighter': {
    borderColor: '#a2f5bf'
  },
  'border-green-lightest': {
    borderColor: '#e3fcec'
  },
  'border-teal-darkest': {
    borderColor: '#0d3331'
  },
  'border-teal-darker': {
    borderColor: '#20504f'
  },
  'border-teal-dark': {
    borderColor: '#38a89d'
  },
  'border-teal': {
    borderColor: '#4dc0b5'
  },
  'border-teal-light': {
    borderColor: '#64d5ca'
  },
  'border-teal-lighter': {
    borderColor: '#a0f0ed'
  },
  'border-teal-lightest': {
    borderColor: '#e8fffe'
  },
  'border-blue-darkest': {
    borderColor: '#12283a'
  },
  'border-blue-darker': {
    borderColor: '#1c3d5a'
  },
  'border-blue-dark': {
    borderColor: '#2779bd'
  },
  'border-blue': {
    borderColor: '#3490dc'
  },
  'border-blue-light': {
    borderColor: '#6cb2eb'
  },
  'border-blue-lighter': {
    borderColor: '#bcdefa'
  },
  'border-blue-lightest': {
    borderColor: '#eff8ff'
  },
  'border-indigo-darkest': {
    borderColor: '#191e38'
  },
  'border-indigo-darker': {
    borderColor: '#2f365f'
  },
  'border-indigo-dark': {
    borderColor: '#5661b3'
  },
  'border-indigo': {
    borderColor: '#6574cd'
  },
  'border-indigo-light': {
    borderColor: '#7886d7'
  },
  'border-indigo-lighter': {
    borderColor: '#b2b7ff'
  },
  'border-indigo-lightest': {
    borderColor: '#e6e8ff'
  },
  'border-purple-darkest': {
    borderColor: '#21183c'
  },
  'border-purple-darker': {
    borderColor: '#382b5f'
  },
  'border-purple-dark': {
    borderColor: '#794acf'
  },
  'border-purple': {
    borderColor: '#9561e2'
  },
  'border-purple-light': {
    borderColor: '#a779e9'
  },
  'border-purple-lighter': {
    borderColor: '#d6bbfc'
  },
  'border-purple-lightest': {
    borderColor: '#f3ebff'
  },
  'border-pink-darkest': {
    borderColor: '#451225'
  },
  'border-pink-darker': {
    borderColor: '#6f213f'
  },
  'border-pink-dark': {
    borderColor: '#eb5286'
  },
  'border-pink': {
    borderColor: '#f66d9b'
  },
  'border-pink-light': {
    borderColor: '#fa7ea8'
  },
  'border-pink-lighter': {
    borderColor: '#ffbbca'
  },
  'border-pink-lightest': {
    borderColor: '#ffebef'
  },
  'border-primary': {
    borderColor: '#58C6BD'
  },
  'border-secondary': {
    borderColor: '#EF9B4A'
  },
  'border-green-50': {
    borderColor: '#F7FCFC'
  },
  'border-green-100': {
    borderColor: '#CAEDEA'
  },
  'border-green-200': {
    borderColor: '#A4E0DB'
  },
  'border-green-300': {
    borderColor: '#7ED3CC'
  },
  'border-green-400': {
    borderColor: '#58C6BD'
  },
  'border-green-500': {
    borderColor: '#58C6BD'
  },
  'border-green-600': {
    borderColor: '#2F8982'
  },
  'border-green-700': {
    borderColor: '#22635E'
  },
  'border-green-800': {
    borderColor: '#153D3A'
  },
  'border-green-900': {
    borderColor: '#081716'
  },
  'border-grey-50': {
    borderColor: '#F8FAFC'
  },
  'border-grey-100': {
    borderColor: '#F1F5F9'
  },
  'border-grey-200': {
    borderColor: '#E2E8F0'
  },
  'border-grey-300': {
    borderColor: '#CBD5E1'
  },
  'border-grey-400': {
    borderColor: '#94A3B8'
  },
  'border-grey-500': {
    borderColor: '#64748B'
  },
  'border-grey-600': {
    borderColor: '#475569'
  },
  'border-grey-700': {
    borderColor: '#334155'
  },
  'border-grey-800': {
    borderColor: '#1E293B'
  },
  'border-grey-900': {
    borderColor: '#0F172A'
  },
  'border-error-50': {
    borderColor: '#FFF5F6'
  },
  'border-error-100': {
    borderColor: '#FCC5CA'
  },
  'border-error-200': {
    borderColor: '#FA949D'
  },
  'border-error-300': {
    borderColor: '#F86371'
  },
  'border-error-400': {
    borderColor: '#F53244'
  },
  'border-error-500': {
    borderColor: '#E90B1F'
  },
  'border-error-600': {
    borderColor: '#B90919'
  },
  'border-error-700': {
    borderColor: '#880612'
  },
  'border-error-800': {
    borderColor: '#58040C'
  },
  'border-error-900': {
    borderColor: '#270205'
  },
  'border-success-50': {
    borderColor: '#EEFAE6'
  },
  'border-success-100': {
    borderColor: '#D2F1BB'
  },
  'border-success-200': {
    borderColor: '#B5E991'
  },
  'border-success-300': {
    borderColor: '#99E066'
  },
  'border-success-400': {
    borderColor: '#7CD83C'
  },
  'border-success-500': {
    borderColor: '#64BC26'
  },
  'border-success-600': {
    borderColor: '#4D901D'
  },
  'border-success-700': {
    borderColor: '#366615'
  },
  'border-success-800': {
    borderColor: '#203B0C'
  },
  'border-success-900': {
    borderColor: '#09110'
  },
  'border-warning-50': {
    borderColor: '#FFFDF5'
  },
  'border-warning-100': {
    borderColor: '#FEF0C3'
  },
  'border-warning-200': {
    borderColor: '#FCE491'
  },
  'border-warning-300': {
    borderColor: '#FBD760'
  },
  'border-warning-400': {
    borderColor: '#FACB2F'
  },
  'border-warning-500': {
    borderColor: '#EFB906'
  },
  'border-warning-600': {
    borderColor: '#BD9205'
  },
  'border-warning-700': {
    borderColor: '#8B6C03'
  },
  'border-warning-800': {
    borderColor: '#5A4502'
  },
  'border-warning-900': {
    borderColor: '#281F01'
  },
  'rounded-none': {
    borderRadius: 0
  },
  'rounded-t-none': {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  },
  'rounded-b-none': {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  'rounded-l-none': {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  'rounded-r-none': {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  'rounded-tl-none': {
    borderTopLeftRadius: 0
  },
  'rounded-tr-none': {
    borderTopRightRadius: 0
  },
  'rounded-bl-none': {
    borderBottomLeftRadius: 0
  },
  'rounded-br-none': {
    borderBottomRightRadius: 0
  },
  'rounded-sm': {
    borderRadius: 2
  },
  'rounded-t-sm': {
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2
  },
  'rounded-b-sm': {
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  'rounded-l-sm': {
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2
  },
  'rounded-r-sm': {
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2
  },
  'rounded-tl-sm': {
    borderTopLeftRadius: 2
  },
  'rounded-tr-sm': {
    borderTopRightRadius: 2
  },
  'rounded-bl-sm': {
    borderBottomLeftRadius: 2
  },
  'rounded-br-sm': {
    borderBottomRightRadius: 2
  },
  'rounded-md': {
    borderRadius: 4
  },
  'rounded-t-md': {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },
  'rounded-b-md': {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  'rounded-l-md': {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4
  },
  'rounded-r-md': {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4
  },
  'rounded-tl-md': {
    borderTopLeftRadius: 4
  },
  'rounded-tr-md': {
    borderTopRightRadius: 4
  },
  'rounded-bl-md': {
    borderBottomLeftRadius: 4
  },
  'rounded-br-md': {
    borderBottomRightRadius: 4
  },
  'rounded-lg': {
    borderRadius: 8
  },
  'rounded-t-lg': {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  'rounded-b-lg': {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  'rounded-l-lg': {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  'rounded-r-lg': {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
  },
  'rounded-tl-lg': {
    borderTopLeftRadius: 8
  },
  'rounded-tr-lg': {
    borderTopRightRadius: 8
  },
  'rounded-bl-lg': {
    borderBottomLeftRadius: 8
  },
  'rounded-br-lg': {
    borderBottomRightRadius: 8
  },
  'rounded-xl': {
    borderRadius: 16
  },
  'rounded-t-xl': {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  },
  'rounded-b-xl': {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  'rounded-l-xl': {
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16
  },
  'rounded-r-xl': {
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16
  },
  'rounded-tl-xl': {
    borderTopLeftRadius: 16
  },
  'rounded-tr-xl': {
    borderTopRightRadius: 16
  },
  'rounded-bl-xl': {
    borderBottomLeftRadius: 16
  },
  'rounded-br-xl': {
    borderBottomRightRadius: 16
  },
  'rounded-2xl': {
    borderRadius: 24
  },
  'rounded-t-2xl': {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24
  },
  'rounded-b-2xl': {
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  'rounded-l-2xl': {
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24
  },
  'rounded-r-2xl': {
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24
  },
  'rounded-tl-2xl': {
    borderTopLeftRadius: 24
  },
  'rounded-tr-2xl': {
    borderTopRightRadius: 24
  },
  'rounded-bl-2xl': {
    borderBottomLeftRadius: 24
  },
  'rounded-br-2xl': {
    borderBottomRightRadius: 24
  },
  'rounded-3xl': {
    borderRadius: 32
  },
  'rounded-t-3xl': {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32
  },
  'rounded-b-3xl': {
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  'rounded-l-3xl': {
    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32
  },
  'rounded-r-3xl': {
    borderTopRightRadius: 32,
    borderBottomRightRadius: 32
  },
  'rounded-tl-3xl': {
    borderTopLeftRadius: 32
  },
  'rounded-tr-3xl': {
    borderTopRightRadius: 32
  },
  'rounded-bl-3xl': {
    borderBottomLeftRadius: 32
  },
  'rounded-br-3xl': {
    borderBottomRightRadius: 32
  },
  'rounded-full': {
    borderRadius: 300
  },
  'rounded-t-full': {
    borderTopLeftRadius: 300,
    borderTopRightRadius: 300
  },
  'rounded-b-full': {
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300
  },
  'rounded-l-full': {
    borderTopLeftRadius: 300,
    borderBottomLeftRadius: 300
  },
  'rounded-r-full': {
    borderTopRightRadius: 300,
    borderBottomRightRadius: 300
  },
  'rounded-tl-full': {
    borderTopLeftRadius: 300
  },
  'rounded-tr-full': {
    borderTopRightRadius: 300
  },
  'rounded-bl-full': {
    borderBottomLeftRadius: 300
  },
  'rounded-br-full': {
    borderBottomRightRadius: 300
  },
  'border-solid': {
    borderStyle: 'solid'
  },
  'border-dashed': {
    borderStyle: 'dashed'
  },
  'border-dotted': {
    borderStyle: 'dotted'
  },
  'border-0': {
    borderWidth: 0
  },
  'border-t-0': {
    borderTopWidth: 0
  },
  'border-b-0': {
    borderBottomWidth: 0
  },
  'border-l-0': {
    borderLeftWidth: 0
  },
  'border-r-0': {
    borderRightWidth: 0
  },
  'border-x-0': {
    borderLeftWidth: 0,
    borderRightWidth: 0
  },
  'border-y-0': {
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  'border-1': {
    borderWidth: 1
  },
  'border-t-1': {
    borderTopWidth: 1
  },
  'border-b-1': {
    borderBottomWidth: 1
  },
  'border-l-1': {
    borderLeftWidth: 1
  },
  'border-r-1': {
    borderRightWidth: 1
  },
  'border-x-1': {
    borderLeftWidth: 1,
    borderRightWidth: 1
  },
  'border-y-1': {
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  'border-2': {
    borderWidth: 2
  },
  'border-t-2': {
    borderTopWidth: 2
  },
  'border-b-2': {
    borderBottomWidth: 2
  },
  'border-l-2': {
    borderLeftWidth: 2
  },
  'border-r-2': {
    borderRightWidth: 2
  },
  'border-x-2': {
    borderLeftWidth: 2,
    borderRightWidth: 2
  },
  'border-y-2': {
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  'border-4': {
    borderWidth: 4
  },
  'border-t-4': {
    borderTopWidth: 4
  },
  'border-b-4': {
    borderBottomWidth: 4
  },
  'border-l-4': {
    borderLeftWidth: 4
  },
  'border-r-4': {
    borderRightWidth: 4
  },
  'border-x-4': {
    borderLeftWidth: 4,
    borderRightWidth: 4
  },
  'border-y-4': {
    borderTopWidth: 4,
    borderBottomWidth: 4
  },
  'border-8': {
    borderWidth: 8
  },
  'border-t-8': {
    borderTopWidth: 8
  },
  'border-b-8': {
    borderBottomWidth: 8
  },
  'border-l-8': {
    borderLeftWidth: 8
  },
  'border-r-8': {
    borderRightWidth: 8
  },
  'border-x-8': {
    borderLeftWidth: 8,
    borderRightWidth: 8
  },
  'border-y-8': {
    borderTopWidth: 8,
    borderBottomWidth: 8
  },
  'cursor-auto': {
    cursor: 'cursor-auto'
  },
  'cursor-default': {
    cursor: 'cursor-default'
  },
  'cursor-pointer': {
    cursor: 'cursor-pointer'
  },
  'cursor-wait': {
    cursor: 'cursor-wait'
  },
  'cursor-text': {
    cursor: 'cursor-text'
  },
  'cursor-move': {
    cursor: 'cursor-move'
  },
  'cursor-help': {
    cursor: 'cursor-help'
  },
  'cursor-not-allowed': {
    cursor: 'cursor-not-allowed'
  },
  'show-box': {
    borderWidth: 1,
    borderColor: 'red',
    borderStyle: 'solid'
  },
  hidden: {
    display: 'none'
  },
  flex: {
    display: 'flex'
  },
  block: {
    display: 'block'
  },
  inline: {
    display: 'inline'
  },
  grid: {
    display: 'grid'
  },
  'inline-block': {
    display: 'inline-block'
  },
  'inline-flex': {
    display: 'inline-flex'
  },
  table: {
    display: 'table'
  },
  'table-caption': {
    display: 'table-caption'
  },
  'table-cell': {
    display: 'table-cell'
  },
  'table-column': {
    display: 'table-column'
  },
  'table-column-group': {
    display: 'table-column-group'
  },
  'table-footer-group': {
    display: 'table-footer-group'
  },
  'table-row-group': {
    display: 'table-row-group'
  },
  'table-row': {
    display: 'table-row'
  },
  'flex-0': {
    flex: 0
  },
  'flex-1': {
    flex: 1
  },
  'flex-row': {
    flexDirection: 'row'
  },
  'flex-row-reverse': {
    flexDirection: 'row-reverse'
  },
  'flex-column': {
    flexDirection: 'column'
  },
  'flex-column-reverse': {
    flexDirection: 'column-reverse'
  },
  'flex-grow-0': {
    flexGrow: 0
  },
  'flex-grow-1': {
    flexGrow: 1
  },
  'flex-shrink-0': {
    flexShrink: 0
  },
  'flex-shrink-1': {
    flexShrink: 1
  },
  'flex-wrap': {
    flexWrap: 'wrap'
  },
  'flex-wrap-reverse': {
    flexWrap: 'wrap-reverse'
  },
  'flex-wrap-none': {
    flexWrap: 'nowrap'
  },
  'text-xs': {
    fontSize: 12
  },
  'text-sm': {
    fontSize: 14
  },
  'text-base': {
    fontSize: 16
  },
  'text-lg': {
    fontSize: 18
  },
  'text-xl': {
    fontSize: 20
  },
  'text-2xl': {
    fontSize: 24
  },
  'text-3xl': {
    fontSize: 30
  },
  'text-4xl': {
    fontSize: 36
  },
  'text-5xl': {
    fontSize: 48
  },
  italic: {
    fontStyle: 'italic'
  },
  'no-italic': {
    fontStyle: 'normal'
  },
  'font-hairline': {
    fontWeight: 100
  },
  'font-thin': {
    fontWeight: 200
  },
  'font-light': {
    fontWeight: 300
  },
  'font-normal': {
    fontWeight: 400
  },
  'font-medium': {
    fontWeight: 500
  },
  'font-semibold': {
    fontWeight: 600
  },
  'font-bold': {
    fontWeight: 700
  },
  'font-extrabold': {
    fontWeight: 800
  },
  'font-black': {
    fontWeight: 900
  },
  'h-0': {
    height: 0
  },
  'h-1': {
    height: 16
  },
  'h-2': {
    height: 32
  },
  'h-3': {
    height: 48
  },
  'h-4': {
    height: 64
  },
  'h-5': {
    height: 80
  },
  'h-6': {
    height: 96
  },
  'h-8': {
    height: 128
  },
  'h-10': {
    height: 160
  },
  'h-12': {
    height: 192
  },
  'h-16': {
    height: 256
  },
  'h-24': {
    height: 384
  },
  'h-32': {
    height: 512
  },
  'h-48': {
    height: 768
  },
  'h-64': {
    height: 1024
  },
  'h-1px': {
    height: 1
  },
  'h-1/2': {
    height: '50%'
  },
  'h-1/3': {
    height: '33.33333%'
  },
  'h-2/3': {
    height: '66.66667%'
  },
  'h-1/4': {
    height: '25%'
  },
  'h-3/4': {
    height: '75%'
  },
  'h-1/5': {
    height: '20%'
  },
  'h-2/5': {
    height: '40%'
  },
  'h-3/5': {
    height: '60%'
  },
  'h-4/5': {
    height: '80%'
  },
  'h-full': {
    height: '100%'
  },
  'h-a': {
    height: 'auto'
  },
  'justify-start': {
    justifyContent: 'flex-start'
  },
  'justify-end': {
    justifyContent: 'flex-end'
  },
  'justify-center': {
    justifyContent: 'center'
  },
  'justify-between': {
    justifyContent: 'space-between'
  },
  'justify-around': {
    justifyContent: 'space-around'
  },
  'justify-evenly': {
    justifyContent: 'space-evenly'
  },
  'tracking-tight': {
    letterSpacing: -0.5
  },
  'tracking-normal': {
    letterSpacing: 0
  },
  'tracking-wide': {
    letterSpacing: 0.5
  },
  'leading-none': {
    lineHeight: 16
  },
  'leading-tight': {
    lineHeight: 20
  },
  'leading-normal': {
    lineHeight: 24
  },
  'leading-loose': {
    lineHeight: 32
  },
  'm-0': {
    margin: 0
  },
  'mt-0': {
    marginTop: 0
  },
  'mb-0': {
    marginBottom: 0
  },
  'ml-0': {
    marginLeft: 0
  },
  'mr-0': {
    marginRight: 0
  },
  'mx-0': {
    marginLeft: 0,
    marginRight: 0
  },
  'my-0': {
    marginTop: 0,
    marginBottom: 0
  },
  'm-1': {
    margin: 4
  },
  'mt-1': {
    marginTop: 4
  },
  'mb-1': {
    marginBottom: 4
  },
  'ml-1': {
    marginLeft: 4
  },
  'mr-1': {
    marginRight: 4
  },
  'mx-1': {
    marginLeft: 4,
    marginRight: 4
  },
  'my-1': {
    marginTop: 4,
    marginBottom: 4
  },
  'm-2': {
    margin: 8
  },
  'mt-2': {
    marginTop: 8
  },
  'mb-2': {
    marginBottom: 8
  },
  'ml-2': {
    marginLeft: 8
  },
  'mr-2': {
    marginRight: 8
  },
  'mx-2': {
    marginLeft: 8,
    marginRight: 8
  },
  'my-2': {
    marginTop: 8,
    marginBottom: 8
  },
  'm-3': {
    margin: 12
  },
  'mt-3': {
    marginTop: 12
  },
  'mb-3': {
    marginBottom: 12
  },
  'ml-3': {
    marginLeft: 12
  },
  'mr-3': {
    marginRight: 12
  },
  'mx-3': {
    marginLeft: 12,
    marginRight: 12
  },
  'my-3': {
    marginTop: 12,
    marginBottom: 12
  },
  'm-4': {
    margin: 16
  },
  'mt-4': {
    marginTop: 16
  },
  'mb-4': {
    marginBottom: 16
  },
  'ml-4': {
    marginLeft: 16
  },
  'mr-4': {
    marginRight: 16
  },
  'mx-4': {
    marginLeft: 16,
    marginRight: 16
  },
  'my-4': {
    marginTop: 16,
    marginBottom: 16
  },
  'm-5': {
    margin: 20
  },
  'mt-5': {
    marginTop: 20
  },
  'mb-5': {
    marginBottom: 20
  },
  'ml-5': {
    marginLeft: 20
  },
  'mr-5': {
    marginRight: 20
  },
  'mx-5': {
    marginLeft: 20,
    marginRight: 20
  },
  'my-5': {
    marginTop: 20,
    marginBottom: 20
  },
  'm-6': {
    margin: 24
  },
  'mt-6': {
    marginTop: 24
  },
  'mb-6': {
    marginBottom: 24
  },
  'ml-6': {
    marginLeft: 24
  },
  'mr-6': {
    marginRight: 24
  },
  'mx-6': {
    marginLeft: 24,
    marginRight: 24
  },
  'my-6': {
    marginTop: 24,
    marginBottom: 24
  },
  'm-8': {
    margin: 32
  },
  'mt-8': {
    marginTop: 32
  },
  'mb-8': {
    marginBottom: 32
  },
  'ml-8': {
    marginLeft: 32
  },
  'mr-8': {
    marginRight: 32
  },
  'mx-8': {
    marginLeft: 32,
    marginRight: 32
  },
  'my-8': {
    marginTop: 32,
    marginBottom: 32
  },
  'm-9': {
    margin: 36
  },
  'mt-9': {
    marginTop: 36
  },
  'mb-9': {
    marginBottom: 36
  },
  'ml-9': {
    marginLeft: 36
  },
  'mr-9': {
    marginRight: 36
  },
  'mx-9': {
    marginLeft: 36,
    marginRight: 36
  },
  'my-9': {
    marginTop: 36,
    marginBottom: 36
  },
  'm-10': {
    margin: 40
  },
  'mt-10': {
    marginTop: 40
  },
  'mb-10': {
    marginBottom: 40
  },
  'ml-10': {
    marginLeft: 40
  },
  'mr-10': {
    marginRight: 40
  },
  'mx-10': {
    marginLeft: 40,
    marginRight: 40
  },
  'my-10': {
    marginTop: 40,
    marginBottom: 40
  },
  'm-12': {
    margin: 48
  },
  'mt-12': {
    marginTop: 48
  },
  'mb-12': {
    marginBottom: 48
  },
  'ml-12': {
    marginLeft: 48
  },
  'mr-12': {
    marginRight: 48
  },
  'mx-12': {
    marginLeft: 48,
    marginRight: 48
  },
  'my-12': {
    marginTop: 48,
    marginBottom: 48
  },
  'm-16': {
    margin: 64
  },
  'mt-16': {
    marginTop: 64
  },
  'mb-16': {
    marginBottom: 64
  },
  'ml-16': {
    marginLeft: 64
  },
  'mr-16': {
    marginRight: 64
  },
  'mx-16': {
    marginLeft: 64,
    marginRight: 64
  },
  'my-16': {
    marginTop: 64,
    marginBottom: 64
  },
  'm-24': {
    margin: 96
  },
  'mt-24': {
    marginTop: 96
  },
  'mb-24': {
    marginBottom: 96
  },
  'ml-24': {
    marginLeft: 96
  },
  'mr-24': {
    marginRight: 96
  },
  'mx-24': {
    marginLeft: 96,
    marginRight: 96
  },
  'my-24': {
    marginTop: 96,
    marginBottom: 96
  },
  'm-32': {
    margin: 128
  },
  'mt-32': {
    marginTop: 128
  },
  'mb-32': {
    marginBottom: 128
  },
  'ml-32': {
    marginLeft: 128
  },
  'mr-32': {
    marginRight: 128
  },
  'mx-32': {
    marginLeft: 128,
    marginRight: 128
  },
  'my-32': {
    marginTop: 128,
    marginBottom: 128
  },
  'm-48': {
    margin: 192
  },
  'mt-48': {
    marginTop: 192
  },
  'mb-48': {
    marginBottom: 192
  },
  'ml-48': {
    marginLeft: 192
  },
  'mr-48': {
    marginRight: 192
  },
  'mx-48': {
    marginLeft: 192,
    marginRight: 192
  },
  'my-48': {
    marginTop: 192,
    marginBottom: 192
  },
  'm-64': {
    margin: 256
  },
  'mt-64': {
    marginTop: 256
  },
  'mb-64': {
    marginBottom: 256
  },
  'ml-64': {
    marginLeft: 256
  },
  'mr-64': {
    marginRight: 256
  },
  'mx-64': {
    marginLeft: 256,
    marginRight: 256
  },
  'my-64': {
    marginTop: 256,
    marginBottom: 256
  },
  'm-1px': {
    margin: 1
  },
  'mt-1px': {
    marginTop: 1
  },
  'mb-1px': {
    marginBottom: 1
  },
  'ml-1px': {
    marginLeft: 1
  },
  'mr-1px': {
    marginRight: 1
  },
  'mx-1px': {
    marginLeft: 1,
    marginRight: 1
  },
  'my-1px': {
    marginTop: 1,
    marginBottom: 1
  },
  'm-1/2': {
    margin: '50%'
  },
  'mt-1/2': {
    marginTop: '50%'
  },
  'mb-1/2': {
    marginBottom: '50%'
  },
  'ml-1/2': {
    marginLeft: '50%'
  },
  'mr-1/2': {
    marginRight: '50%'
  },
  'mx-1/2': {
    marginLeft: '50%',
    marginRight: '50%'
  },
  'my-1/2': {
    marginTop: '50%',
    marginBottom: '50%'
  },
  'm-1/3': {
    margin: '33.33333%'
  },
  'mt-1/3': {
    marginTop: '33.33333%'
  },
  'mb-1/3': {
    marginBottom: '33.33333%'
  },
  'ml-1/3': {
    marginLeft: '33.33333%'
  },
  'mr-1/3': {
    marginRight: '33.33333%'
  },
  'mx-1/3': {
    marginLeft: '33.33333%',
    marginRight: '33.33333%'
  },
  'my-1/3': {
    marginTop: '33.33333%',
    marginBottom: '33.33333%'
  },
  'm-2/3': {
    margin: '66.66667%'
  },
  'mt-2/3': {
    marginTop: '66.66667%'
  },
  'mb-2/3': {
    marginBottom: '66.66667%'
  },
  'ml-2/3': {
    marginLeft: '66.66667%'
  },
  'mr-2/3': {
    marginRight: '66.66667%'
  },
  'mx-2/3': {
    marginLeft: '66.66667%',
    marginRight: '66.66667%'
  },
  'my-2/3': {
    marginTop: '66.66667%',
    marginBottom: '66.66667%'
  },
  'm-1/4': {
    margin: '25%'
  },
  'mt-1/4': {
    marginTop: '25%'
  },
  'mb-1/4': {
    marginBottom: '25%'
  },
  'ml-1/4': {
    marginLeft: '25%'
  },
  'mr-1/4': {
    marginRight: '25%'
  },
  'mx-1/4': {
    marginLeft: '25%',
    marginRight: '25%'
  },
  'my-1/4': {
    marginTop: '25%',
    marginBottom: '25%'
  },
  'm-3/4': {
    margin: '75%'
  },
  'mt-3/4': {
    marginTop: '75%'
  },
  'mb-3/4': {
    marginBottom: '75%'
  },
  'ml-3/4': {
    marginLeft: '75%'
  },
  'mr-3/4': {
    marginRight: '75%'
  },
  'mx-3/4': {
    marginLeft: '75%',
    marginRight: '75%'
  },
  'my-3/4': {
    marginTop: '75%',
    marginBottom: '75%'
  },
  'm-1/5': {
    margin: '20%'
  },
  'mt-1/5': {
    marginTop: '20%'
  },
  'mb-1/5': {
    marginBottom: '20%'
  },
  'ml-1/5': {
    marginLeft: '20%'
  },
  'mr-1/5': {
    marginRight: '20%'
  },
  'mx-1/5': {
    marginLeft: '20%',
    marginRight: '20%'
  },
  'my-1/5': {
    marginTop: '20%',
    marginBottom: '20%'
  },
  'm-2/5': {
    margin: '40%'
  },
  'mt-2/5': {
    marginTop: '40%'
  },
  'mb-2/5': {
    marginBottom: '40%'
  },
  'ml-2/5': {
    marginLeft: '40%'
  },
  'mr-2/5': {
    marginRight: '40%'
  },
  'mx-2/5': {
    marginLeft: '40%',
    marginRight: '40%'
  },
  'my-2/5': {
    marginTop: '40%',
    marginBottom: '40%'
  },
  'm-3/5': {
    margin: '60%'
  },
  'mt-3/5': {
    marginTop: '60%'
  },
  'mb-3/5': {
    marginBottom: '60%'
  },
  'ml-3/5': {
    marginLeft: '60%'
  },
  'mr-3/5': {
    marginRight: '60%'
  },
  'mx-3/5': {
    marginLeft: '60%',
    marginRight: '60%'
  },
  'my-3/5': {
    marginTop: '60%',
    marginBottom: '60%'
  },
  'm-4/5': {
    margin: '80%'
  },
  'mt-4/5': {
    marginTop: '80%'
  },
  'mb-4/5': {
    marginBottom: '80%'
  },
  'ml-4/5': {
    marginLeft: '80%'
  },
  'mr-4/5': {
    marginRight: '80%'
  },
  'mx-4/5': {
    marginLeft: '80%',
    marginRight: '80%'
  },
  'my-4/5': {
    marginTop: '80%',
    marginBottom: '80%'
  },
  'm-a': {
    margin: 'auto'
  },
  'mt-a': {
    marginTop: 'auto'
  },
  'mb-a': {
    marginBottom: 'auto'
  },
  'ml-a': {
    marginLeft: 'auto'
  },
  'mr-a': {
    marginRight: 'auto'
  },
  'mx-a': {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  'my-a': {
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  'max-h-0': {
    maxHeight: 0
  },
  'max-h-1': {
    maxHeight: 16
  },
  'max-h-2': {
    maxHeight: 32
  },
  'max-h-3': {
    maxHeight: 48
  },
  'max-h-4': {
    maxHeight: 64
  },
  'max-h-5': {
    maxHeight: 80
  },
  'max-h-6': {
    maxHeight: 96
  },
  'max-h-8': {
    maxHeight: 128
  },
  'max-h-10': {
    maxHeight: 160
  },
  'max-h-12': {
    maxHeight: 192
  },
  'max-h-16': {
    maxHeight: 256
  },
  'max-h-24': {
    maxHeight: 384
  },
  'max-h-32': {
    maxHeight: 512
  },
  'max-h-48': {
    maxHeight: 768
  },
  'max-h-64': {
    maxHeight: 1024
  },
  'max-h-1px': {
    maxHeight: 1
  },
  'max-h-1/2': {
    maxHeight: '50%'
  },
  'max-h-1/3': {
    maxHeight: '33.33333%'
  },
  'max-h-2/3': {
    maxHeight: '66.66667%'
  },
  'max-h-1/4': {
    maxHeight: '25%'
  },
  'max-h-3/4': {
    maxHeight: '75%'
  },
  'max-h-1/5': {
    maxHeight: '20%'
  },
  'max-h-2/5': {
    maxHeight: '40%'
  },
  'max-h-3/5': {
    maxHeight: '60%'
  },
  'max-h-4/5': {
    maxHeight: '80%'
  },
  'max-h-full': {
    maxHeight: '100%'
  },
  'max-h-a': {
    maxHeight: 'auto'
  },
  'max-w-0': {
    maxWidth: 0
  },
  'max-w-1': {
    maxWidth: 16
  },
  'max-w-2': {
    maxWidth: 32
  },
  'max-w-3': {
    maxWidth: 48
  },
  'max-w-4': {
    maxWidth: 64
  },
  'max-w-5': {
    maxWidth: 80
  },
  'max-w-6': {
    maxWidth: 96
  },
  'max-w-8': {
    maxWidth: 128
  },
  'max-w-10': {
    maxWidth: 160
  },
  'max-w-12': {
    maxWidth: 192
  },
  'max-w-16': {
    maxWidth: 256
  },
  'max-w-24': {
    maxWidth: 384
  },
  'max-w-32': {
    maxWidth: 512
  },
  'max-w-48': {
    maxWidth: 768
  },
  'max-w-64': {
    maxWidth: 1024
  },
  'max-w-1px': {
    maxWidth: 1
  },
  'max-w-1/2': {
    maxWidth: '50%'
  },
  'max-w-1/3': {
    maxWidth: '33.33333%'
  },
  'max-w-2/3': {
    maxWidth: '66.66667%'
  },
  'max-w-1/4': {
    maxWidth: '25%'
  },
  'max-w-3/4': {
    maxWidth: '75%'
  },
  'max-w-1/5': {
    maxWidth: '20%'
  },
  'max-w-2/5': {
    maxWidth: '40%'
  },
  'max-w-3/5': {
    maxWidth: '60%'
  },
  'max-w-4/5': {
    maxWidth: '80%'
  },
  'max-w-full': {
    maxWidth: '100%'
  },
  'max-w-a': {
    maxWidth: 'auto'
  },
  'min-h-0': {
    minHeight: 0
  },
  'min-h-1': {
    minHeight: 16
  },
  'min-h-2': {
    minHeight: 32
  },
  'min-h-3': {
    minHeight: 48
  },
  'min-h-4': {
    minHeight: 64
  },
  'min-h-5': {
    minHeight: 80
  },
  'min-h-6': {
    minHeight: 96
  },
  'min-h-8': {
    minHeight: 128
  },
  'min-h-10': {
    minHeight: 160
  },
  'min-h-12': {
    minHeight: 192
  },
  'min-h-16': {
    minHeight: 256
  },
  'min-h-24': {
    minHeight: 384
  },
  'min-h-32': {
    minHeight: 512
  },
  'min-h-48': {
    minHeight: 768
  },
  'min-h-64': {
    minHeight: 1024
  },
  'min-h-1px': {
    minHeight: 1
  },
  'min-h-1/2': {
    minHeight: '50%'
  },
  'min-h-1/3': {
    minHeight: '33.33333%'
  },
  'min-h-2/3': {
    minHeight: '66.66667%'
  },
  'min-h-1/4': {
    minHeight: '25%'
  },
  'min-h-3/4': {
    minHeight: '75%'
  },
  'min-h-1/5': {
    minHeight: '20%'
  },
  'min-h-2/5': {
    minHeight: '40%'
  },
  'min-h-3/5': {
    minHeight: '60%'
  },
  'min-h-4/5': {
    minHeight: '80%'
  },
  'min-h-full': {
    minHeight: '100%'
  },
  'min-h-a': {
    minHeight: 'auto'
  },
  'min-w-0': {
    minWidth: 0
  },
  'min-w-1': {
    minWidth: 16
  },
  'min-w-2': {
    minWidth: 32
  },
  'min-w-3': {
    minWidth: 48
  },
  'min-w-4': {
    minWidth: 64
  },
  'min-w-5': {
    minWidth: 80
  },
  'min-w-6': {
    minWidth: 96
  },
  'min-w-8': {
    minWidth: 128
  },
  'min-w-10': {
    minWidth: 160
  },
  'min-w-12': {
    minWidth: 192
  },
  'min-w-16': {
    minWidth: 256
  },
  'min-w-24': {
    minWidth: 384
  },
  'min-w-32': {
    minWidth: 512
  },
  'min-w-48': {
    minWidth: 768
  },
  'min-w-64': {
    minWidth: 1024
  },
  'min-w-1px': {
    minWidth: 1
  },
  'min-w-1/2': {
    minWidth: '50%'
  },
  'min-w-1/3': {
    minWidth: '33.33333%'
  },
  'min-w-2/3': {
    minWidth: '66.66667%'
  },
  'min-w-1/4': {
    minWidth: '25%'
  },
  'min-w-3/4': {
    minWidth: '75%'
  },
  'min-w-1/5': {
    minWidth: '20%'
  },
  'min-w-2/5': {
    minWidth: '40%'
  },
  'min-w-3/5': {
    minWidth: '60%'
  },
  'min-w-4/5': {
    minWidth: '80%'
  },
  'min-w-full': {
    minWidth: '100%'
  },
  'min-w-a': {
    minWidth: 'auto'
  },
  'object-contain': {
    objectFit: 'contain'
  },
  'object-cover': {
    objectFit: 'cover'
  },
  'object-fill': {
    objectFit: 'fill'
  },
  'object-none': {
    objectFit: 'none'
  },
  'object-scale-down': {
    objectFit: 'scale-down'
  },
  'p-0': {
    padding: 0
  },
  'pt-0': {
    paddingTop: 0
  },
  'pb-0': {
    paddingBottom: 0
  },
  'pl-0': {
    paddingLeft: 0
  },
  'pr-0': {
    paddingRight: 0
  },
  'px-0': {
    paddingLeft: 0,
    paddingRight: 0
  },
  'py-0': {
    paddingTop: 0,
    paddingBottom: 0
  },
  'p-1': {
    padding: 4
  },
  'pt-1': {
    paddingTop: 4
  },
  'pb-1': {
    paddingBottom: 4
  },
  'pl-1': {
    paddingLeft: 4
  },
  'pr-1': {
    paddingRight: 4
  },
  'px-1': {
    paddingLeft: 4,
    paddingRight: 4
  },
  'py-1': {
    paddingTop: 4,
    paddingBottom: 4
  },
  'p-2': {
    padding: 8
  },
  'pt-2': {
    paddingTop: 8
  },
  'pb-2': {
    paddingBottom: 8
  },
  'pl-2': {
    paddingLeft: 8
  },
  'pr-2': {
    paddingRight: 8
  },
  'px-2': {
    paddingLeft: 8,
    paddingRight: 8
  },
  'py-2': {
    paddingTop: 8,
    paddingBottom: 8
  },
  'p-3': {
    padding: 12
  },
  'pt-3': {
    paddingTop: 12
  },
  'pb-3': {
    paddingBottom: 12
  },
  'pl-3': {
    paddingLeft: 12
  },
  'pr-3': {
    paddingRight: 12
  },
  'px-3': {
    paddingLeft: 12,
    paddingRight: 12
  },
  'py-3': {
    paddingTop: 12,
    paddingBottom: 12
  },
  'p-4': {
    padding: 16
  },
  'pt-4': {
    paddingTop: 16
  },
  'pb-4': {
    paddingBottom: 16
  },
  'pl-4': {
    paddingLeft: 16
  },
  'pr-4': {
    paddingRight: 16
  },
  'px-4': {
    paddingLeft: 16,
    paddingRight: 16
  },
  'py-4': {
    paddingTop: 16,
    paddingBottom: 16
  },
  'p-5': {
    padding: 20
  },
  'pt-5': {
    paddingTop: 20
  },
  'pb-5': {
    paddingBottom: 20
  },
  'pl-5': {
    paddingLeft: 20
  },
  'pr-5': {
    paddingRight: 20
  },
  'px-5': {
    paddingLeft: 20,
    paddingRight: 20
  },
  'py-5': {
    paddingTop: 20,
    paddingBottom: 20
  },
  'p-6': {
    padding: 24
  },
  'pt-6': {
    paddingTop: 24
  },
  'pb-6': {
    paddingBottom: 24
  },
  'pl-6': {
    paddingLeft: 24
  },
  'pr-6': {
    paddingRight: 24
  },
  'px-6': {
    paddingLeft: 24,
    paddingRight: 24
  },
  'py-6': {
    paddingTop: 24,
    paddingBottom: 24
  },
  'p-8': {
    padding: 32
  },
  'pt-8': {
    paddingTop: 32
  },
  'pb-8': {
    paddingBottom: 32
  },
  'pl-8': {
    paddingLeft: 32
  },
  'pr-8': {
    paddingRight: 32
  },
  'px-8': {
    paddingLeft: 32,
    paddingRight: 32
  },
  'py-8': {
    paddingTop: 32,
    paddingBottom: 32
  },
  'p-9': {
    padding: 36
  },
  'pt-9': {
    paddingTop: 36
  },
  'pb-9': {
    paddingBottom: 36
  },
  'pl-9': {
    paddingLeft: 36
  },
  'pr-9': {
    paddingRight: 36
  },
  'px-9': {
    paddingLeft: 36,
    paddingRight: 36
  },
  'py-9': {
    paddingTop: 36,
    paddingBottom: 36
  },
  'p-10': {
    padding: 40
  },
  'pt-10': {
    paddingTop: 40
  },
  'pb-10': {
    paddingBottom: 40
  },
  'pl-10': {
    paddingLeft: 40
  },
  'pr-10': {
    paddingRight: 40
  },
  'px-10': {
    paddingLeft: 40,
    paddingRight: 40
  },
  'py-10': {
    paddingTop: 40,
    paddingBottom: 40
  },
  'p-12': {
    padding: 48
  },
  'pt-12': {
    paddingTop: 48
  },
  'pb-12': {
    paddingBottom: 48
  },
  'pl-12': {
    paddingLeft: 48
  },
  'pr-12': {
    paddingRight: 48
  },
  'px-12': {
    paddingLeft: 48,
    paddingRight: 48
  },
  'py-12': {
    paddingTop: 48,
    paddingBottom: 48
  },
  'p-16': {
    padding: 64
  },
  'pt-16': {
    paddingTop: 64
  },
  'pb-16': {
    paddingBottom: 64
  },
  'pl-16': {
    paddingLeft: 64
  },
  'pr-16': {
    paddingRight: 64
  },
  'px-16': {
    paddingLeft: 64,
    paddingRight: 64
  },
  'py-16': {
    paddingTop: 64,
    paddingBottom: 64
  },
  'p-24': {
    padding: 96
  },
  'pt-24': {
    paddingTop: 96
  },
  'pb-24': {
    paddingBottom: 96
  },
  'pl-24': {
    paddingLeft: 96
  },
  'pr-24': {
    paddingRight: 96
  },
  'px-24': {
    paddingLeft: 96,
    paddingRight: 96
  },
  'py-24': {
    paddingTop: 96,
    paddingBottom: 96
  },
  'p-32': {
    padding: 128
  },
  'pt-32': {
    paddingTop: 128
  },
  'pb-32': {
    paddingBottom: 128
  },
  'pl-32': {
    paddingLeft: 128
  },
  'pr-32': {
    paddingRight: 128
  },
  'px-32': {
    paddingLeft: 128,
    paddingRight: 128
  },
  'py-32': {
    paddingTop: 128,
    paddingBottom: 128
  },
  'p-48': {
    padding: 192
  },
  'pt-48': {
    paddingTop: 192
  },
  'pb-48': {
    paddingBottom: 192
  },
  'pl-48': {
    paddingLeft: 192
  },
  'pr-48': {
    paddingRight: 192
  },
  'px-48': {
    paddingLeft: 192,
    paddingRight: 192
  },
  'py-48': {
    paddingTop: 192,
    paddingBottom: 192
  },
  'p-64': {
    padding: 256
  },
  'pt-64': {
    paddingTop: 256
  },
  'pb-64': {
    paddingBottom: 256
  },
  'pl-64': {
    paddingLeft: 256
  },
  'pr-64': {
    paddingRight: 256
  },
  'px-64': {
    paddingLeft: 256,
    paddingRight: 256
  },
  'py-64': {
    paddingTop: 256,
    paddingBottom: 256
  },
  'p-1px': {
    padding: 1
  },
  'pt-1px': {
    paddingTop: 1
  },
  'pb-1px': {
    paddingBottom: 1
  },
  'pl-1px': {
    paddingLeft: 1
  },
  'pr-1px': {
    paddingRight: 1
  },
  'px-1px': {
    paddingLeft: 1,
    paddingRight: 1
  },
  'py-1px': {
    paddingTop: 1,
    paddingBottom: 1
  },
  'p-1/2': {
    padding: '50%'
  },
  'pt-1/2': {
    paddingTop: '50%'
  },
  'pb-1/2': {
    paddingBottom: '50%'
  },
  'pl-1/2': {
    paddingLeft: '50%'
  },
  'pr-1/2': {
    paddingRight: '50%'
  },
  'px-1/2': {
    paddingLeft: '50%',
    paddingRight: '50%'
  },
  'py-1/2': {
    paddingTop: '50%',
    paddingBottom: '50%'
  },
  'p-1/3': {
    padding: '33.33333%'
  },
  'pt-1/3': {
    paddingTop: '33.33333%'
  },
  'pb-1/3': {
    paddingBottom: '33.33333%'
  },
  'pl-1/3': {
    paddingLeft: '33.33333%'
  },
  'pr-1/3': {
    paddingRight: '33.33333%'
  },
  'px-1/3': {
    paddingLeft: '33.33333%',
    paddingRight: '33.33333%'
  },
  'py-1/3': {
    paddingTop: '33.33333%',
    paddingBottom: '33.33333%'
  },
  'p-2/3': {
    padding: '66.66667%'
  },
  'pt-2/3': {
    paddingTop: '66.66667%'
  },
  'pb-2/3': {
    paddingBottom: '66.66667%'
  },
  'pl-2/3': {
    paddingLeft: '66.66667%'
  },
  'pr-2/3': {
    paddingRight: '66.66667%'
  },
  'px-2/3': {
    paddingLeft: '66.66667%',
    paddingRight: '66.66667%'
  },
  'py-2/3': {
    paddingTop: '66.66667%',
    paddingBottom: '66.66667%'
  },
  'p-1/4': {
    padding: '25%'
  },
  'pt-1/4': {
    paddingTop: '25%'
  },
  'pb-1/4': {
    paddingBottom: '25%'
  },
  'pl-1/4': {
    paddingLeft: '25%'
  },
  'pr-1/4': {
    paddingRight: '25%'
  },
  'px-1/4': {
    paddingLeft: '25%',
    paddingRight: '25%'
  },
  'py-1/4': {
    paddingTop: '25%',
    paddingBottom: '25%'
  },
  'p-3/4': {
    padding: '75%'
  },
  'pt-3/4': {
    paddingTop: '75%'
  },
  'pb-3/4': {
    paddingBottom: '75%'
  },
  'pl-3/4': {
    paddingLeft: '75%'
  },
  'pr-3/4': {
    paddingRight: '75%'
  },
  'px-3/4': {
    paddingLeft: '75%',
    paddingRight: '75%'
  },
  'py-3/4': {
    paddingTop: '75%',
    paddingBottom: '75%'
  },
  'p-1/5': {
    padding: '20%'
  },
  'pt-1/5': {
    paddingTop: '20%'
  },
  'pb-1/5': {
    paddingBottom: '20%'
  },
  'pl-1/5': {
    paddingLeft: '20%'
  },
  'pr-1/5': {
    paddingRight: '20%'
  },
  'px-1/5': {
    paddingLeft: '20%',
    paddingRight: '20%'
  },
  'py-1/5': {
    paddingTop: '20%',
    paddingBottom: '20%'
  },
  'p-2/5': {
    padding: '40%'
  },
  'pt-2/5': {
    paddingTop: '40%'
  },
  'pb-2/5': {
    paddingBottom: '40%'
  },
  'pl-2/5': {
    paddingLeft: '40%'
  },
  'pr-2/5': {
    paddingRight: '40%'
  },
  'px-2/5': {
    paddingLeft: '40%',
    paddingRight: '40%'
  },
  'py-2/5': {
    paddingTop: '40%',
    paddingBottom: '40%'
  },
  'p-3/5': {
    padding: '60%'
  },
  'pt-3/5': {
    paddingTop: '60%'
  },
  'pb-3/5': {
    paddingBottom: '60%'
  },
  'pl-3/5': {
    paddingLeft: '60%'
  },
  'pr-3/5': {
    paddingRight: '60%'
  },
  'px-3/5': {
    paddingLeft: '60%',
    paddingRight: '60%'
  },
  'py-3/5': {
    paddingTop: '60%',
    paddingBottom: '60%'
  },
  'p-4/5': {
    padding: '80%'
  },
  'pt-4/5': {
    paddingTop: '80%'
  },
  'pb-4/5': {
    paddingBottom: '80%'
  },
  'pl-4/5': {
    paddingLeft: '80%'
  },
  'pr-4/5': {
    paddingRight: '80%'
  },
  'px-4/5': {
    paddingLeft: '80%',
    paddingRight: '80%'
  },
  'py-4/5': {
    paddingTop: '80%',
    paddingBottom: '80%'
  },
  'p-a': {
    padding: 'auto'
  },
  'pt-a': {
    paddingTop: 'auto'
  },
  'pb-a': {
    paddingBottom: 'auto'
  },
  'pl-a': {
    paddingLeft: 'auto'
  },
  'pr-a': {
    paddingRight: 'auto'
  },
  'px-a': {
    paddingLeft: 'auto',
    paddingRight: 'auto'
  },
  'py-a': {
    paddingTop: 'auto',
    paddingBottom: 'auto'
  },
  absolute: {
    position: 'absolute'
  },
  relative: {
    position: 'relative'
  },
  static: {
    position: 'static'
  },
  fixed: {
    position: 'fixed'
  },
  sticky: {
    position: 'sticky'
  },
  'pin-0': {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  'pin-t-0': {
    top: 0
  },
  'pin-r-0': {
    right: 0
  },
  'pin-b-0': {
    bottom: 0
  },
  'pin-l-0': {
    left: 0
  },
  'pin-tl-0': {
    top: 0,
    left: 0
  },
  'pin-tr-0': {
    top: 0,
    right: 0
  },
  'pin-bl-0': {
    bottom: 0,
    left: 0
  },
  'pin-br-0': {
    bottom: 0,
    right: 0
  },
  'pin-x-0': {
    left: 0,
    right: 0
  },
  'pin-y-0': {
    top: 0,
    bottom: 0
  },
  'pin-1': {
    top: 4,
    right: 4,
    bottom: 4,
    left: 4
  },
  'pin-t-1': {
    top: 4
  },
  'pin-r-1': {
    right: 4
  },
  'pin-b-1': {
    bottom: 4
  },
  'pin-l-1': {
    left: 4
  },
  'pin-tl-1': {
    top: 4,
    left: 4
  },
  'pin-tr-1': {
    top: 4,
    right: 4
  },
  'pin-bl-1': {
    bottom: 4,
    left: 4
  },
  'pin-br-1': {
    bottom: 4,
    right: 4
  },
  'pin-x-1': {
    left: 4,
    right: 4
  },
  'pin-y-1': {
    top: 4,
    bottom: 4
  },
  'pin-2': {
    top: 8,
    right: 8,
    bottom: 8,
    left: 8
  },
  'pin-t-2': {
    top: 8
  },
  'pin-r-2': {
    right: 8
  },
  'pin-b-2': {
    bottom: 8
  },
  'pin-l-2': {
    left: 8
  },
  'pin-tl-2': {
    top: 8,
    left: 8
  },
  'pin-tr-2': {
    top: 8,
    right: 8
  },
  'pin-bl-2': {
    bottom: 8,
    left: 8
  },
  'pin-br-2': {
    bottom: 8,
    right: 8
  },
  'pin-x-2': {
    left: 8,
    right: 8
  },
  'pin-y-2': {
    top: 8,
    bottom: 8
  },
  'pin-3': {
    top: 12,
    right: 12,
    bottom: 12,
    left: 12
  },
  'pin-t-3': {
    top: 12
  },
  'pin-r-3': {
    right: 12
  },
  'pin-b-3': {
    bottom: 12
  },
  'pin-l-3': {
    left: 12
  },
  'pin-tl-3': {
    top: 12,
    left: 12
  },
  'pin-tr-3': {
    top: 12,
    right: 12
  },
  'pin-bl-3': {
    bottom: 12,
    left: 12
  },
  'pin-br-3': {
    bottom: 12,
    right: 12
  },
  'pin-x-3': {
    left: 12,
    right: 12
  },
  'pin-y-3': {
    top: 12,
    bottom: 12
  },
  'pin-4': {
    top: 16,
    right: 16,
    bottom: 16,
    left: 16
  },
  'pin-t-4': {
    top: 16
  },
  'pin-r-4': {
    right: 16
  },
  'pin-b-4': {
    bottom: 16
  },
  'pin-l-4': {
    left: 16
  },
  'pin-tl-4': {
    top: 16,
    left: 16
  },
  'pin-tr-4': {
    top: 16,
    right: 16
  },
  'pin-bl-4': {
    bottom: 16,
    left: 16
  },
  'pin-br-4': {
    bottom: 16,
    right: 16
  },
  'pin-x-4': {
    left: 16,
    right: 16
  },
  'pin-y-4': {
    top: 16,
    bottom: 16
  },
  'pin-5': {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20
  },
  'pin-t-5': {
    top: 20
  },
  'pin-r-5': {
    right: 20
  },
  'pin-b-5': {
    bottom: 20
  },
  'pin-l-5': {
    left: 20
  },
  'pin-tl-5': {
    top: 20,
    left: 20
  },
  'pin-tr-5': {
    top: 20,
    right: 20
  },
  'pin-bl-5': {
    bottom: 20,
    left: 20
  },
  'pin-br-5': {
    bottom: 20,
    right: 20
  },
  'pin-x-5': {
    left: 20,
    right: 20
  },
  'pin-y-5': {
    top: 20,
    bottom: 20
  },
  'pin-6': {
    top: 24,
    right: 24,
    bottom: 24,
    left: 24
  },
  'pin-t-6': {
    top: 24
  },
  'pin-r-6': {
    right: 24
  },
  'pin-b-6': {
    bottom: 24
  },
  'pin-l-6': {
    left: 24
  },
  'pin-tl-6': {
    top: 24,
    left: 24
  },
  'pin-tr-6': {
    top: 24,
    right: 24
  },
  'pin-bl-6': {
    bottom: 24,
    left: 24
  },
  'pin-br-6': {
    bottom: 24,
    right: 24
  },
  'pin-x-6': {
    left: 24,
    right: 24
  },
  'pin-y-6': {
    top: 24,
    bottom: 24
  },
  'pin-8': {
    top: 32,
    right: 32,
    bottom: 32,
    left: 32
  },
  'pin-t-8': {
    top: 32
  },
  'pin-r-8': {
    right: 32
  },
  'pin-b-8': {
    bottom: 32
  },
  'pin-l-8': {
    left: 32
  },
  'pin-tl-8': {
    top: 32,
    left: 32
  },
  'pin-tr-8': {
    top: 32,
    right: 32
  },
  'pin-bl-8': {
    bottom: 32,
    left: 32
  },
  'pin-br-8': {
    bottom: 32,
    right: 32
  },
  'pin-x-8': {
    left: 32,
    right: 32
  },
  'pin-y-8': {
    top: 32,
    bottom: 32
  },
  'pin-10': {
    top: 40,
    right: 40,
    bottom: 40,
    left: 40
  },
  'pin-t-10': {
    top: 40
  },
  'pin-r-10': {
    right: 40
  },
  'pin-b-10': {
    bottom: 40
  },
  'pin-l-10': {
    left: 40
  },
  'pin-tl-10': {
    top: 40,
    left: 40
  },
  'pin-tr-10': {
    top: 40,
    right: 40
  },
  'pin-bl-10': {
    bottom: 40,
    left: 40
  },
  'pin-br-10': {
    bottom: 40,
    right: 40
  },
  'pin-x-10': {
    left: 40,
    right: 40
  },
  'pin-y-10': {
    top: 40,
    bottom: 40
  },
  'pin-12': {
    top: 48,
    right: 48,
    bottom: 48,
    left: 48
  },
  'pin-t-12': {
    top: 48
  },
  'pin-r-12': {
    right: 48
  },
  'pin-b-12': {
    bottom: 48
  },
  'pin-l-12': {
    left: 48
  },
  'pin-tl-12': {
    top: 48,
    left: 48
  },
  'pin-tr-12': {
    top: 48,
    right: 48
  },
  'pin-bl-12': {
    bottom: 48,
    left: 48
  },
  'pin-br-12': {
    bottom: 48,
    right: 48
  },
  'pin-x-12': {
    left: 48,
    right: 48
  },
  'pin-y-12': {
    top: 48,
    bottom: 48
  },
  'pin-16': {
    top: 64,
    right: 64,
    bottom: 64,
    left: 64
  },
  'pin-t-16': {
    top: 64
  },
  'pin-r-16': {
    right: 64
  },
  'pin-b-16': {
    bottom: 64
  },
  'pin-l-16': {
    left: 64
  },
  'pin-tl-16': {
    top: 64,
    left: 64
  },
  'pin-tr-16': {
    top: 64,
    right: 64
  },
  'pin-bl-16': {
    bottom: 64,
    left: 64
  },
  'pin-br-16': {
    bottom: 64,
    right: 64
  },
  'pin-x-16': {
    left: 64,
    right: 64
  },
  'pin-y-16': {
    top: 64,
    bottom: 64
  },
  'pin-24': {
    top: 96,
    right: 96,
    bottom: 96,
    left: 96
  },
  'pin-t-24': {
    top: 96
  },
  'pin-r-24': {
    right: 96
  },
  'pin-b-24': {
    bottom: 96
  },
  'pin-l-24': {
    left: 96
  },
  'pin-tl-24': {
    top: 96,
    left: 96
  },
  'pin-tr-24': {
    top: 96,
    right: 96
  },
  'pin-bl-24': {
    bottom: 96,
    left: 96
  },
  'pin-br-24': {
    bottom: 96,
    right: 96
  },
  'pin-x-24': {
    left: 96,
    right: 96
  },
  'pin-y-24': {
    top: 96,
    bottom: 96
  },
  'pin-32': {
    top: 128,
    right: 128,
    bottom: 128,
    left: 128
  },
  'pin-t-32': {
    top: 128
  },
  'pin-r-32': {
    right: 128
  },
  'pin-b-32': {
    bottom: 128
  },
  'pin-l-32': {
    left: 128
  },
  'pin-tl-32': {
    top: 128,
    left: 128
  },
  'pin-tr-32': {
    top: 128,
    right: 128
  },
  'pin-bl-32': {
    bottom: 128,
    left: 128
  },
  'pin-br-32': {
    bottom: 128,
    right: 128
  },
  'pin-x-32': {
    left: 128,
    right: 128
  },
  'pin-y-32': {
    top: 128,
    bottom: 128
  },
  'pin-48': {
    top: 192,
    right: 192,
    bottom: 192,
    left: 192
  },
  'pin-t-48': {
    top: 192
  },
  'pin-r-48': {
    right: 192
  },
  'pin-b-48': {
    bottom: 192
  },
  'pin-l-48': {
    left: 192
  },
  'pin-tl-48': {
    top: 192,
    left: 192
  },
  'pin-tr-48': {
    top: 192,
    right: 192
  },
  'pin-bl-48': {
    bottom: 192,
    left: 192
  },
  'pin-br-48': {
    bottom: 192,
    right: 192
  },
  'pin-x-48': {
    left: 192,
    right: 192
  },
  'pin-y-48': {
    top: 192,
    bottom: 192
  },
  'pin-64': {
    top: 256,
    right: 256,
    bottom: 256,
    left: 256
  },
  'pin-t-64': {
    top: 256
  },
  'pin-r-64': {
    right: 256
  },
  'pin-b-64': {
    bottom: 256
  },
  'pin-l-64': {
    left: 256
  },
  'pin-tl-64': {
    top: 256,
    left: 256
  },
  'pin-tr-64': {
    top: 256,
    right: 256
  },
  'pin-bl-64': {
    bottom: 256,
    left: 256
  },
  'pin-br-64': {
    bottom: 256,
    right: 256
  },
  'pin-x-64': {
    left: 256,
    right: 256
  },
  'pin-y-64': {
    top: 256,
    bottom: 256
  },
  '-pin-1': {
    top: -4,
    right: -4,
    bottom: -4,
    left: -4
  },
  '-pin-t-1': {
    top: -4
  },
  '-pin-r-1': {
    right: -4
  },
  '-pin-b-1': {
    bottom: -4
  },
  '-pin-l-1': {
    left: -4
  },
  '-pin-tl-1': {
    top: -4,
    left: -4
  },
  '-pin-tr-1': {
    top: -4,
    right: -4
  },
  '-pin-bl-1': {
    bottom: -4,
    left: -4
  },
  '-pin-br-1': {
    bottom: -4,
    right: -4
  },
  '-pin-x-1': {
    left: -4,
    right: -4
  },
  '-pin-y-1': {
    top: -4,
    bottom: -4
  },
  '-pin-2': {
    top: -8,
    right: -8,
    bottom: -8,
    left: -8
  },
  '-pin-t-2': {
    top: -8
  },
  '-pin-r-2': {
    right: -8
  },
  '-pin-b-2': {
    bottom: -8
  },
  '-pin-l-2': {
    left: -8
  },
  '-pin-tl-2': {
    top: -8,
    left: -8
  },
  '-pin-tr-2': {
    top: -8,
    right: -8
  },
  '-pin-bl-2': {
    bottom: -8,
    left: -8
  },
  '-pin-br-2': {
    bottom: -8,
    right: -8
  },
  '-pin-x-2': {
    left: -8,
    right: -8
  },
  '-pin-y-2': {
    top: -8,
    bottom: -8
  },
  '-pin-3': {
    top: -12,
    right: -12,
    bottom: -12,
    left: -12
  },
  '-pin-t-3': {
    top: -12
  },
  '-pin-r-3': {
    right: -12
  },
  '-pin-b-3': {
    bottom: -12
  },
  '-pin-l-3': {
    left: -12
  },
  '-pin-tl-3': {
    top: -12,
    left: -12
  },
  '-pin-tr-3': {
    top: -12,
    right: -12
  },
  '-pin-bl-3': {
    bottom: -12,
    left: -12
  },
  '-pin-br-3': {
    bottom: -12,
    right: -12
  },
  '-pin-x-3': {
    left: -12,
    right: -12
  },
  '-pin-y-3': {
    top: -12,
    bottom: -12
  },
  '-pin-4': {
    top: -16,
    right: -16,
    bottom: -16,
    left: -16
  },
  '-pin-t-4': {
    top: -16
  },
  '-pin-r-4': {
    right: -16
  },
  '-pin-b-4': {
    bottom: -16
  },
  '-pin-l-4': {
    left: -16
  },
  '-pin-tl-4': {
    top: -16,
    left: -16
  },
  '-pin-tr-4': {
    top: -16,
    right: -16
  },
  '-pin-bl-4': {
    bottom: -16,
    left: -16
  },
  '-pin-br-4': {
    bottom: -16,
    right: -16
  },
  '-pin-x-4': {
    left: -16,
    right: -16
  },
  '-pin-y-4': {
    top: -16,
    bottom: -16
  },
  '-pin-5': {
    top: -20,
    right: -20,
    bottom: -20,
    left: -20
  },
  '-pin-t-5': {
    top: -20
  },
  '-pin-r-5': {
    right: -20
  },
  '-pin-b-5': {
    bottom: -20
  },
  '-pin-l-5': {
    left: -20
  },
  '-pin-tl-5': {
    top: -20,
    left: -20
  },
  '-pin-tr-5': {
    top: -20,
    right: -20
  },
  '-pin-bl-5': {
    bottom: -20,
    left: -20
  },
  '-pin-br-5': {
    bottom: -20,
    right: -20
  },
  '-pin-x-5': {
    left: -20,
    right: -20
  },
  '-pin-y-5': {
    top: -20,
    bottom: -20
  },
  '-pin-6': {
    top: -24,
    right: -24,
    bottom: -24,
    left: -24
  },
  '-pin-t-6': {
    top: -24
  },
  '-pin-r-6': {
    right: -24
  },
  '-pin-b-6': {
    bottom: -24
  },
  '-pin-l-6': {
    left: -24
  },
  '-pin-tl-6': {
    top: -24,
    left: -24
  },
  '-pin-tr-6': {
    top: -24,
    right: -24
  },
  '-pin-bl-6': {
    bottom: -24,
    left: -24
  },
  '-pin-br-6': {
    bottom: -24,
    right: -24
  },
  '-pin-x-6': {
    left: -24,
    right: -24
  },
  '-pin-y-6': {
    top: -24,
    bottom: -24
  },
  '-pin-8': {
    top: -32,
    right: -32,
    bottom: -32,
    left: -32
  },
  '-pin-t-8': {
    top: -32
  },
  '-pin-r-8': {
    right: -32
  },
  '-pin-b-8': {
    bottom: -32
  },
  '-pin-l-8': {
    left: -32
  },
  '-pin-tl-8': {
    top: -32,
    left: -32
  },
  '-pin-tr-8': {
    top: -32,
    right: -32
  },
  '-pin-bl-8': {
    bottom: -32,
    left: -32
  },
  '-pin-br-8': {
    bottom: -32,
    right: -32
  },
  '-pin-x-8': {
    left: -32,
    right: -32
  },
  '-pin-y-8': {
    top: -32,
    bottom: -32
  },
  '-pin-10': {
    top: -40,
    right: -40,
    bottom: -40,
    left: -40
  },
  '-pin-t-10': {
    top: -40
  },
  '-pin-r-10': {
    right: -40
  },
  '-pin-b-10': {
    bottom: -40
  },
  '-pin-l-10': {
    left: -40
  },
  '-pin-tl-10': {
    top: -40,
    left: -40
  },
  '-pin-tr-10': {
    top: -40,
    right: -40
  },
  '-pin-bl-10': {
    bottom: -40,
    left: -40
  },
  '-pin-br-10': {
    bottom: -40,
    right: -40
  },
  '-pin-x-10': {
    left: -40,
    right: -40
  },
  '-pin-y-10': {
    top: -40,
    bottom: -40
  },
  '-pin-12': {
    top: -48,
    right: -48,
    bottom: -48,
    left: -48
  },
  '-pin-t-12': {
    top: -48
  },
  '-pin-r-12': {
    right: -48
  },
  '-pin-b-12': {
    bottom: -48
  },
  '-pin-l-12': {
    left: -48
  },
  '-pin-tl-12': {
    top: -48,
    left: -48
  },
  '-pin-tr-12': {
    top: -48,
    right: -48
  },
  '-pin-bl-12': {
    bottom: -48,
    left: -48
  },
  '-pin-br-12': {
    bottom: -48,
    right: -48
  },
  '-pin-x-12': {
    left: -48,
    right: -48
  },
  '-pin-y-12': {
    top: -48,
    bottom: -48
  },
  '-pin-16': {
    top: -64,
    right: -64,
    bottom: -64,
    left: -64
  },
  '-pin-t-16': {
    top: -64
  },
  '-pin-r-16': {
    right: -64
  },
  '-pin-b-16': {
    bottom: -64
  },
  '-pin-l-16': {
    left: -64
  },
  '-pin-tl-16': {
    top: -64,
    left: -64
  },
  '-pin-tr-16': {
    top: -64,
    right: -64
  },
  '-pin-bl-16': {
    bottom: -64,
    left: -64
  },
  '-pin-br-16': {
    bottom: -64,
    right: -64
  },
  '-pin-x-16': {
    left: -64,
    right: -64
  },
  '-pin-y-16': {
    top: -64,
    bottom: -64
  },
  '-pin-24': {
    top: -96,
    right: -96,
    bottom: -96,
    left: -96
  },
  '-pin-t-24': {
    top: -96
  },
  '-pin-r-24': {
    right: -96
  },
  '-pin-b-24': {
    bottom: -96
  },
  '-pin-l-24': {
    left: -96
  },
  '-pin-tl-24': {
    top: -96,
    left: -96
  },
  '-pin-tr-24': {
    top: -96,
    right: -96
  },
  '-pin-bl-24': {
    bottom: -96,
    left: -96
  },
  '-pin-br-24': {
    bottom: -96,
    right: -96
  },
  '-pin-x-24': {
    left: -96,
    right: -96
  },
  '-pin-y-24': {
    top: -96,
    bottom: -96
  },
  '-pin-32': {
    top: -128,
    right: -128,
    bottom: -128,
    left: -128
  },
  '-pin-t-32': {
    top: -128
  },
  '-pin-r-32': {
    right: -128
  },
  '-pin-b-32': {
    bottom: -128
  },
  '-pin-l-32': {
    left: -128
  },
  '-pin-tl-32': {
    top: -128,
    left: -128
  },
  '-pin-tr-32': {
    top: -128,
    right: -128
  },
  '-pin-bl-32': {
    bottom: -128,
    left: -128
  },
  '-pin-br-32': {
    bottom: -128,
    right: -128
  },
  '-pin-x-32': {
    left: -128,
    right: -128
  },
  '-pin-y-32': {
    top: -128,
    bottom: -128
  },
  '-pin-48': {
    top: -192,
    right: -192,
    bottom: -192,
    left: -192
  },
  '-pin-t-48': {
    top: -192
  },
  '-pin-r-48': {
    right: -192
  },
  '-pin-b-48': {
    bottom: -192
  },
  '-pin-l-48': {
    left: -192
  },
  '-pin-tl-48': {
    top: -192,
    left: -192
  },
  '-pin-tr-48': {
    top: -192,
    right: -192
  },
  '-pin-bl-48': {
    bottom: -192,
    left: -192
  },
  '-pin-br-48': {
    bottom: -192,
    right: -192
  },
  '-pin-x-48': {
    left: -192,
    right: -192
  },
  '-pin-y-48': {
    top: -192,
    bottom: -192
  },
  '-pin-64': {
    top: -256,
    right: -256,
    bottom: -256,
    left: -256
  },
  '-pin-t-64': {
    top: -256
  },
  '-pin-r-64': {
    right: -256
  },
  '-pin-b-64': {
    bottom: -256
  },
  '-pin-l-64': {
    left: -256
  },
  '-pin-tl-64': {
    top: -256,
    left: -256
  },
  '-pin-tr-64': {
    top: -256,
    right: -256
  },
  '-pin-bl-64': {
    bottom: -256,
    left: -256
  },
  '-pin-br-64': {
    bottom: -256,
    right: -256
  },
  '-pin-x-64': {
    left: -256,
    right: -256
  },
  '-pin-y-64': {
    top: -256,
    bottom: -256
  },
  'shadow-none': {
    boxShadow: 'none'
  },
  'shadow-xs': {
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
  },
  'shadow-sm': {
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
  },
  'shadow-md': {
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
  },
  'shadow-lg': {
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
  },
  'shadow-xl': {
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  },
  'shadow-2xl': {
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
  },
  'text-left': {
    textAlign: 'left'
  },
  'text-right': {
    textAlign: 'right'
  },
  'text-center': {
    textAlign: 'center'
  },
  'text-transparent': {
    color: 'transparent'
  },
  'text-black': {
    color: '#000000'
  },
  'text-near-black': {
    color: '#1c2227'
  },
  'text-grey-darkest': {
    color: '#3d4852'
  },
  'text-grey-darker': {
    color: '#606f7b'
  },
  'text-grey-dark': {
    color: '#8795a1'
  },
  'text-grey': {
    color: '#b8c2cc'
  },
  'text-grey-light': {
    color: '#dae1e7'
  },
  'text-grey-lighter': {
    color: '#f1f5f8'
  },
  'text-grey-lightest': {
    color: '#f8fafc'
  },
  'text-white': {
    color: '#ffffff'
  },
  'text-red-darkest': {
    color: '#3b0d0c'
  },
  'text-red-darker': {
    color: '#621b18'
  },
  'text-red-dark': {
    color: '#cc1f1a'
  },
  'text-red': {
    color: '#e3342f'
  },
  'text-red-light': {
    color: '#ef5753'
  },
  'text-red-lighter': {
    color: '#f9acaa'
  },
  'text-red-lightest': {
    color: '#fcebea'
  },
  'text-orange-darkest': {
    color: '#462a16'
  },
  'text-orange-darker': {
    color: '#613b1f'
  },
  'text-orange-dark': {
    color: '#de751f'
  },
  'text-orange': {
    color: '#f6993f'
  },
  'text-orange-light': {
    color: '#faad63'
  },
  'text-orange-lighter': {
    color: '#fcd9b6'
  },
  'text-orange-lightest': {
    color: '#fff5eb'
  },
  'text-yellow-darkest': {
    color: '#453411'
  },
  'text-yellow-darker': {
    color: '#684f1d'
  },
  'text-yellow-dark': {
    color: '#f2d024'
  },
  'text-yellow': {
    color: '#ffed4a'
  },
  'text-yellow-light': {
    color: '#fff382'
  },
  'text-yellow-lighter': {
    color: '#fff9c2'
  },
  'text-yellow-lightest': {
    color: '#fcfbeb'
  },
  'text-green-darkest': {
    color: '#0f2f21'
  },
  'text-green-darker': {
    color: '#1a4731'
  },
  'text-green-dark': {
    color: '#1f9d55'
  },
  'text-green': {
    color: '#38c172'
  },
  'text-green-light': {
    color: '#51d88a'
  },
  'text-green-lighter': {
    color: '#a2f5bf'
  },
  'text-green-lightest': {
    color: '#e3fcec'
  },
  'text-teal-darkest': {
    color: '#0d3331'
  },
  'text-teal-darker': {
    color: '#20504f'
  },
  'text-teal-dark': {
    color: '#38a89d'
  },
  'text-teal': {
    color: '#4dc0b5'
  },
  'text-teal-light': {
    color: '#64d5ca'
  },
  'text-teal-lighter': {
    color: '#a0f0ed'
  },
  'text-teal-lightest': {
    color: '#e8fffe'
  },
  'text-blue-darkest': {
    color: '#12283a'
  },
  'text-blue-darker': {
    color: '#1c3d5a'
  },
  'text-blue-dark': {
    color: '#2779bd'
  },
  'text-blue': {
    color: '#3490dc'
  },
  'text-blue-light': {
    color: '#6cb2eb'
  },
  'text-blue-lighter': {
    color: '#bcdefa'
  },
  'text-blue-lightest': {
    color: '#eff8ff'
  },
  'text-indigo-darkest': {
    color: '#191e38'
  },
  'text-indigo-darker': {
    color: '#2f365f'
  },
  'text-indigo-dark': {
    color: '#5661b3'
  },
  'text-indigo': {
    color: '#6574cd'
  },
  'text-indigo-light': {
    color: '#7886d7'
  },
  'text-indigo-lighter': {
    color: '#b2b7ff'
  },
  'text-indigo-lightest': {
    color: '#e6e8ff'
  },
  'text-purple-darkest': {
    color: '#21183c'
  },
  'text-purple-darker': {
    color: '#382b5f'
  },
  'text-purple-dark': {
    color: '#794acf'
  },
  'text-purple': {
    color: '#9561e2'
  },
  'text-purple-light': {
    color: '#a779e9'
  },
  'text-purple-lighter': {
    color: '#d6bbfc'
  },
  'text-purple-lightest': {
    color: '#f3ebff'
  },
  'text-pink-darkest': {
    color: '#451225'
  },
  'text-pink-darker': {
    color: '#6f213f'
  },
  'text-pink-dark': {
    color: '#eb5286'
  },
  'text-pink': {
    color: '#f66d9b'
  },
  'text-pink-light': {
    color: '#fa7ea8'
  },
  'text-pink-lighter': {
    color: '#ffbbca'
  },
  'text-pink-lightest': {
    color: '#ffebef'
  },
  'text-primary': {
    color: '#58C6BD'
  },
  'text-secondary': {
    color: '#EF9B4A'
  },
  'text-green-50': {
    color: '#F7FCFC'
  },
  'text-green-100': {
    color: '#CAEDEA'
  },
  'text-green-200': {
    color: '#A4E0DB'
  },
  'text-green-300': {
    color: '#7ED3CC'
  },
  'text-green-400': {
    color: '#58C6BD'
  },
  'text-green-500': {
    color: '#58C6BD'
  },
  'text-green-600': {
    color: '#2F8982'
  },
  'text-green-700': {
    color: '#22635E'
  },
  'text-green-800': {
    color: '#153D3A'
  },
  'text-green-900': {
    color: '#081716'
  },
  'text-grey-50': {
    color: '#F8FAFC'
  },
  'text-grey-100': {
    color: '#F1F5F9'
  },
  'text-grey-200': {
    color: '#E2E8F0'
  },
  'text-grey-300': {
    color: '#CBD5E1'
  },
  'text-grey-400': {
    color: '#94A3B8'
  },
  'text-grey-500': {
    color: '#64748B'
  },
  'text-grey-600': {
    color: '#475569'
  },
  'text-grey-700': {
    color: '#334155'
  },
  'text-grey-800': {
    color: '#1E293B'
  },
  'text-grey-900': {
    color: '#0F172A'
  },
  'text-error-50': {
    color: '#FFF5F6'
  },
  'text-error-100': {
    color: '#FCC5CA'
  },
  'text-error-200': {
    color: '#FA949D'
  },
  'text-error-300': {
    color: '#F86371'
  },
  'text-error-400': {
    color: '#F53244'
  },
  'text-error-500': {
    color: '#E90B1F'
  },
  'text-error-600': {
    color: '#B90919'
  },
  'text-error-700': {
    color: '#880612'
  },
  'text-error-800': {
    color: '#58040C'
  },
  'text-error-900': {
    color: '#270205'
  },
  'text-success-50': {
    color: '#EEFAE6'
  },
  'text-success-100': {
    color: '#D2F1BB'
  },
  'text-success-200': {
    color: '#B5E991'
  },
  'text-success-300': {
    color: '#99E066'
  },
  'text-success-400': {
    color: '#7CD83C'
  },
  'text-success-500': {
    color: '#64BC26'
  },
  'text-success-600': {
    color: '#4D901D'
  },
  'text-success-700': {
    color: '#366615'
  },
  'text-success-800': {
    color: '#203B0C'
  },
  'text-success-900': {
    color: '#09110'
  },
  'text-warning-50': {
    color: '#FFFDF5'
  },
  'text-warning-100': {
    color: '#FEF0C3'
  },
  'text-warning-200': {
    color: '#FCE491'
  },
  'text-warning-300': {
    color: '#FBD760'
  },
  'text-warning-400': {
    color: '#FACB2F'
  },
  'text-warning-500': {
    color: '#EFB906'
  },
  'text-warning-600': {
    color: '#BD9205'
  },
  'text-warning-700': {
    color: '#8B6C03'
  },
  'text-warning-800': {
    color: '#5A4502'
  },
  'text-warning-900': {
    color: '#281F01'
  },
  'no-decoration': {
    textDecorationLine: 'none'
  },
  underline: {
    textDecorationLine: 'underline'
  },
  'line-through': {
    textDecorationLine: 'line-through'
  },
  'normal-case': {
    textTransform: 'none'
  },
  uppercase: {
    textTransform: 'uppercase'
  },
  lowercase: {
    textTransform: 'lowercase'
  },
  capitalize: {
    textTransform: 'capitalize'
  },
  'w-0': {
    width: 0
  },
  'w-1': {
    width: 16
  },
  'w-2': {
    width: 32
  },
  'w-3': {
    width: 48
  },
  'w-4': {
    width: 64
  },
  'w-5': {
    width: 80
  },
  'w-6': {
    width: 96
  },
  'w-8': {
    width: 128
  },
  'w-10': {
    width: 160
  },
  'w-12': {
    width: 192
  },
  'w-16': {
    width: 256
  },
  'w-24': {
    width: 384
  },
  'w-32': {
    width: 512
  },
  'w-48': {
    width: 768
  },
  'w-64': {
    width: 1024
  },
  'w-1px': {
    width: 1
  },
  'w-1/2': {
    width: '50%'
  },
  'w-1/3': {
    width: '33.33333%'
  },
  'w-2/3': {
    width: '66.66667%'
  },
  'w-1/4': {
    width: '25%'
  },
  'w-3/4': {
    width: '75%'
  },
  'w-1/5': {
    width: '20%'
  },
  'w-2/5': {
    width: '40%'
  },
  'w-3/5': {
    width: '60%'
  },
  'w-4/5': {
    width: '80%'
  },
  'w-full': {
    width: '100%'
  },
  'w-a': {
    width: 'auto'
  },
  'z-0': {
    zIndex: 0
  },
  'z-1': {
    zIndex: 1
  },
  'z-2': {
    zIndex: 2
  },
  'z-3': {
    zIndex: 3
  },
  'z-4': {
    zIndex: 4
  },
  'z-5': {
    zIndex: 5
  }
};
exports.defaultUtilityStyles = defaultUtilityStyles;