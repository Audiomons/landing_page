'use client'

import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'
import EditImage from '@/images/Edited Doctor 1.svg'
import Image from "next/image";



const plans = [
  {
    name: 'Starter',
    featured: false,
    price: { Monthly: '$0', Annually: '$0' },
    description:
      'You’re new to investing but want to do it right. Get started for free.',
    button: {
      label: 'Get started for free',
      href: '/register',
    },
    features: [
      'Automate referrals Patient',
      'Education Remote',
      'Assessment Medication',
      'Adherence Voice AI calls',
        'NLP- based Q&A'
    ],
    logomarkClassName: 'fill-gray-300',
  },


    {
        name: 'Starter',
        featured: false,
        price: { Monthly: '$0', Annually: '$0' },
        description:
            'You’re new to investing but want to do it right. Get started for free.',
        button: {
            label: 'Get started for free',
            href: '/register',
        },
        features: [
            'Reduce inbox notifications',
            'Automated check-ins',
            'Patient reported outcomes collection',
            'Triage & escalation',
            'Two-way texting'
        ],
        logomarkClassName: 'fill-gray-300',
    }
]

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        fill="currentColor"
      />
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({
                features,
                featured = false,
              }) {
  return (
      <section
          className={clsx(
              'flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5',
              featured ? 'order-first bg-gray-900 lg:order-none' : 'bg-white',
          )}
      >
        <div className="order-last mt-6">
          <ul
              role="list"
              className={clsx(
                  '-my-2 divide-y text-sm',
                  featured
                      ? 'divide-gray-800 text-gray-300'
                      : 'divide-gray-200 text-gray-700',
              )}
          >
            {features.map((feature) => (
                <li key={feature} className="flex py-2">
                  <CheckIcon
                      className={clsx(
                          'h-6 w-6 flex-none',
                          featured ? 'text-white' : 'text-cyan-500',
                      )}
                  />
                  <span className="ml-4">{feature}</span>
                </li>
            ))}
          </ul>
        </div>
      </section>
  )
}


export function Pricing() {
    let [activePeriod, setActivePeriod] = useState('Monthly')

    return (
        <section
            id="pricing"
            aria-labelledby="pricing-title"
            className="border-t border-gray-200 bg-gray-100 py-20 sm:py-32"
        >
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <h2
                        id="pricing-title"
                        className="text-3xl font-medium tracking-tight text-gray-900 font-custom"
                    >
                        Features
                    </h2>
                    <p className="mt-2 text-lg text-gray-600">
                        Alto offers a wide range of features for you
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-3">
                    {plans.map((plan, index) => (
                        <>
                            <Plan key={plan.name} features={plan.features} featured={plan.featured} />
                            {/* Render the image only between the two feature boxes */}
                            {index === 0 && (
                                <div className="flex justify-center items-center">
                                    <Image src={EditImage} alt="Hero Image" width={800} height={600} />
                                </div>
                            )}
                        </>
                    ))}
                </div>
            </Container>
        </section>
    )
}

