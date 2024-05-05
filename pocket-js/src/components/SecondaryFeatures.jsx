import { useId } from 'react'

import { Container } from '@/components/Container'

const features = [
  {
    name: 'Increase Access',
    description:
      'Alto makes it easier for patients to refer and seek support even out of hours.\n' +
        '\n',
    icon: DeviceArrowIcon,
  },
  {
    name: 'Release Time\n',
    description:
      'Alto saves your team time in administration and prioritisation',
    icon: DeviceCardsIcon,
  },
  {
    name: 'Essential information in your hands before assessment\n',
    description:
      'Save time by leaving Alto to collect vital information\n' +
        'Alto gathers all the information you need demographics, historyat the point of referral.',
    icon: DeviceClockIcon,
  },
  {
    name: 'Provide guidance, leverage patient reports\n',
    description:
      'Alto delivers automated, accessible, and always-on support to your patients. Letting you stay close to them, even when they’re at home, without extra work added to your plate.\n' +
        '\n',
    icon: DeviceListIcon,
  },
  {
    name: 'Prioritise patients at risk\n',
    description:
      'Alto sign post those at risk to more appropriate services, and automatic tagging allows you to prioritize assessments for those who may be at risk\n' +
        '\n',
    icon: DeviceLockIcon,
  },
  {
    name: 'Improve outcomes\n',
    description:
      'Early patient engagement is associated with adherence and outcomes improvements',
    icon: DeviceChartIcon,
  },
]

function DeviceArrowIcon(props) {
  return (
      <svg width="61" height="60" viewBox="0 0 61 60" fill="#2B3160" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_31_209)">
              <path d="M30.5 13.125C29.2021 13.125 27.9333 12.7401 26.8541 12.019C25.7749 11.2979 24.9337 10.273 24.437 9.07386C23.9403 7.87472 23.8104 6.55522 24.0636 5.28222C24.3168 4.00922 24.9418 2.83989 25.8596 1.92211C26.7774 1.00433 27.9467 0.379311 29.2197 0.126096C30.4927 -0.12712 31.8122 0.00283966 33.0114 0.49954C34.2105 0.99624 35.2354 1.83737 35.9565 2.91657C36.6776 3.99577 37.0625 5.26456 37.0625 6.5625C37.0606 8.30241 36.3686 9.97053 35.1383 11.2008C33.908 12.4311 32.2399 13.1231 30.5 13.125Z" fill="#2B3160"/>
              <path d="M51.125 13.2187L51.0723 13.2328L51.0231 13.248C50.9059 13.2809 50.7887 13.316 50.6715 13.3523C48.4907 13.9922 37.9063 16.9758 30.4497 16.9758C23.5204 16.9758 13.8934 14.3977 10.8137 13.5223C10.5072 13.4038 10.1942 13.3028 9.87622 13.2199C7.64966 12.634 6.12622 14.8957 6.12622 16.9629C6.12622 19.0102 7.96606 19.9852 9.82349 20.6848V20.7176L20.9821 24.2027C22.1223 24.6398 22.427 25.0863 22.5758 25.473C23.0598 26.7141 22.6731 29.1715 22.536 30.0293L21.8563 35.3027L18.084 55.95C18.0723 56.0062 18.0618 56.0637 18.0524 56.1223L18.0254 56.2711C17.7536 58.1637 19.1434 60 21.7754 60C24.0723 60 25.086 58.4145 25.5254 56.257C25.9649 54.0996 28.8067 37.7918 30.4473 37.7918C32.0879 37.7918 35.4676 56.257 35.4676 56.257C35.9071 58.4145 36.9208 60 39.2176 60C41.8567 60 43.2465 58.1555 42.9676 56.257C42.9437 56.0974 42.914 55.9387 42.8786 55.7812L39.0547 35.3051L38.3762 30.0316C37.8852 26.9602 38.2801 25.9453 38.4137 25.7074C38.4173 25.7018 38.4204 25.6959 38.4231 25.6898C38.5497 25.4555 39.1262 24.9305 40.4715 24.4254L50.934 20.768C50.9983 20.7509 51.0617 20.7305 51.1239 20.707C52.9989 20.0039 54.8739 19.0312 54.8739 16.9652C54.8739 14.8992 53.3516 12.634 51.125 13.2187Z" fill="#2B3160"/>
          </g>
          <defs>
              <clipPath id="clip0_31_209">
                  <rect width="60" height="60" fill="white" transform="translate(0.5)"/>
              </clipPath>
          </defs>
      </svg>
  )
}

function DeviceCardsIcon(props) {
  let id = useId()

  return (

      <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.5 3.75C16.25 3.75 4.25 15.75 4.25 30C4.25 44.25 16.25 56.25 30.5 56.25C44.75 56.25 56.75 44.25 56.75 30C56.75 15.75 44.75 3.75 30.5 3.75ZM39.1006 41.25L28.625 30.7687V13.125H32.375V29.2162L41.75 38.5988L39.1006 41.25Z" fill="#2B3160"/>
      </svg>

  )
}

function DeviceClockIcon(props) {
  return (

      <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28 42.5H33V27.5H28V42.5ZM30.5 22.5C31.2083 22.5 31.8025 22.26 32.2825 21.78C32.7625 21.3 33.0017 20.7067 33 20C33 19.2917 32.76 18.6983 32.28 18.22C31.8 17.7417 31.2067 17.5017 30.5 17.5C29.7917 17.5 29.1983 17.74 28.72 18.22C28.2417 18.7 28.0017 19.2933 28 20C28 20.7083 28.24 21.3025 28.72 21.7825C29.2 22.2625 29.7933 22.5017 30.5 22.5ZM30.5 55C27.0417 55 23.7917 54.3433 20.75 53.03C17.7083 51.7167 15.0625 49.9358 12.8125 47.6875C10.5625 45.4375 8.78167 42.7917 7.47 39.75C6.15833 36.7083 5.50167 33.4583 5.5 30C5.5 26.5417 6.15667 23.2917 7.47 20.25C8.78333 17.2083 10.5642 14.5625 12.8125 12.3125C15.0625 10.0625 17.7083 8.28167 20.75 6.97C23.7917 5.65833 27.0417 5.00167 30.5 5C33.9583 5 37.2083 5.65667 40.25 6.97C43.2917 8.28333 45.9375 10.0642 48.1875 12.3125C50.4375 14.5625 52.2192 17.2083 53.5325 20.25C54.8458 23.2917 55.5017 26.5417 55.5 30C55.5 33.4583 54.8433 36.7083 53.53 39.75C52.2167 42.7917 50.4358 45.4375 48.1875 47.6875C45.9375 49.9375 43.2917 51.7192 40.25 53.0325C37.2083 54.3458 33.9583 55.0017 30.5 55Z" fill="#2B3160"/>
      </svg>

  )
}

function DeviceListIcon(props) {
  return (

      <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50.5 20L35.5 5H15.5C14.1739 5 12.9021 5.52678 11.9645 6.46447C11.0268 7.40215 10.5 8.67392 10.5 10V50C10.5 51.3261 11.0268 52.5979 11.9645 53.5355C12.9021 54.4732 14.1739 55 15.5 55H45.5C46.8261 55 48.0979 54.4732 49.0355 53.5355C49.9732 52.5979 50.5 51.3261 50.5 50V20ZM23 47.5H18V25H23V47.5ZM33 47.5H28V32.5H33V47.5ZM43 47.5H38V40H43V47.5ZM35.5 22.5H33V10L45.5 22.5H35.5Z" fill="#2B3160"/>
      </svg>

  )
}

function DeviceLockIcon(props) {
  return (

      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M32.3874 2.23251C32.074 1.91881 31.7018 1.66995 31.2921 1.50016C30.8825 1.33037 30.4433 1.24298 29.9999 1.24298C29.5564 1.24298 29.1173 1.33037 28.7077 1.50016C28.298 1.66995 27.9258 1.91881 27.6124 2.23251L2.23489 27.6125C1.92119 27.9259 1.67233 28.2981 1.50254 28.7078C1.33275 29.1175 1.24536 29.5566 1.24536 30C1.24536 30.4435 1.33275 30.8826 1.50254 31.2922C1.67233 31.7019 1.92119 32.0741 2.23489 32.3875L27.6124 57.7625C27.9258 58.0762 28.298 58.3251 28.7077 58.4949C29.1173 58.6646 29.5564 58.752 29.9999 58.752C30.4433 58.752 30.8825 58.6646 31.2921 58.4949C31.7018 58.3251 32.074 58.0762 32.3874 57.7625L57.7649 32.3875C58.0786 32.0741 58.3274 31.7019 58.4972 31.2922C58.667 30.8826 58.7544 30.4435 58.7544 30C58.7544 29.5566 58.667 29.1175 58.4972 28.7078C58.3274 28.2981 58.0786 27.9259 57.7649 27.6125L32.3874 2.23251ZM31.3249 16.175C31.1487 15.9986 30.939 15.8591 30.7083 15.7647C30.4775 15.6703 30.2302 15.6229 29.9809 15.6252C29.7316 15.6276 29.4852 15.6796 29.2562 15.7783C29.0273 15.877 28.8203 16.0204 28.6474 16.2L18.6474 26.6175C18.4767 26.7951 18.3426 27.0046 18.2529 27.234C18.1631 27.4635 18.1194 27.7083 18.1243 27.9546C18.1292 28.2009 18.1825 28.4439 18.2813 28.6696C18.38 28.8953 18.5223 29.0993 18.6999 29.27C18.8775 29.4407 19.087 29.5748 19.3164 29.6645C19.5459 29.7543 19.7907 29.798 20.037 29.7931C20.2833 29.7882 20.5263 29.7349 20.7519 29.6361C20.9776 29.5374 21.1817 29.3951 21.3524 29.2175L28.1249 22.16V40C28.1249 40.4973 28.3224 40.9742 28.6741 41.3258C29.0257 41.6775 29.5026 41.875 29.9999 41.875C30.4972 41.875 30.9741 41.6775 31.3257 41.3258C31.6773 40.9742 31.8749 40.4973 31.8749 40V22.025L38.6749 28.825C38.8465 29.0092 39.0535 29.157 39.2835 29.2595C39.5135 29.3619 39.7618 29.417 40.0136 29.4215C40.2653 29.4259 40.5154 29.3796 40.7489 29.2853C40.9824 29.191 41.1944 29.0507 41.3725 28.8726C41.5505 28.6946 41.6909 28.4825 41.7852 28.249C41.8795 28.0155 41.9258 27.7655 41.9214 27.5137C41.9169 27.2619 41.8618 27.0137 41.7593 26.7837C41.6569 26.5537 41.5091 26.3467 41.3249 26.175L31.3249 16.175Z" fill="#2B3160"/>
      </svg>

  )
}

function DeviceChartIcon(props) {
  return (

      <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M48 7.5H13C10.25 7.5 8 9.75 8 12.5V47.5C8 50.25 10.25 52.5 13 52.5H48C50.75 52.5 53 50.25 53 47.5V12.5C53 9.75 50.75 7.5 48 7.5ZM23 42.5H18V25H23V42.5ZM33 42.5H28V17.5H33V42.5ZM43 42.5H38V32.5H43V42.5Z" fill="#2B3160"/>
      </svg>

  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
              Amplifying clinicians

          </h2>
          <p className="mt-2 text-lg text-gray-600">
              Alto works with - not against - your existing technology and processes to augment your team.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-200 p-8"
            >
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 font-semibold text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-700">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
