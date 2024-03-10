import { trigger, transition, style, animateChild, group, animate, query, sequence } from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimation', [
    transition('HomePage <=> AboutPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ]),
      query(':enter', [style({ left: '-100%' })], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [animate('300ms ease-out', style({ left: '100%' }))], { optional: true }),
        query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], { optional: true }),
      ]),
    ]),
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          }),
        ],
        { optional: true },
      ),
      query(':enter', [style({ left: '-100%' })], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [animate('200ms ease-out', style({ left: '100%', opacity: 0 }))], {
          optional: true,
        }),
        query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], { optional: true }),
        query('@*', animateChild(), { optional: true }),
      ]),
    ]),
  ]);

  export const fadeInAnimation = trigger('routeAnimation', [
    transition('HomePage <=> AboutPage', [
      style({ position: 'absolute' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
        }),
      ]),
      query(':enter', [style({ opacity: 0 })], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [animate('300ms ease-out', style({ opacity: 0 }))], { optional: true }),
        query(':enter', [
          sequence([
            animate('1000ms ease-out', style({ opacity: 0 })),
            animate('2000ms ease-out', style({ opacity: 1 })),
          ]),
        ], { optional: true }),
      ]),
    ]),
    transition('* <=> *', [
      style({ position: 'absolute' }),
      query(
        ':enter, :leave',
        [
          style({
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
          }),
        ],
        { optional: true },
      ),
      query(':enter', [style({ opacity: 0 })], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [animate('200ms ease-out', style({ opacity: 0 }))], {
          optional: true,
        }),
        query(':enter', [
          sequence([
            animate('100ms ease-out', style({ opacity: 0 })),
            animate('200ms ease-out', style({ opacity: 1 })),
          ]),
        ], { optional: true }),
        query('@*', animateChild(), { optional: true }),
      ]),
    ]),
  ]);


export const slideUpAnimation = trigger('routeAnimation', [
  transition('HomePage <=> AboutPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        height: '100%',
      }),
    ]),
    query(':enter', [style({ top: '-100%' })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('300ms ease-out', style({ top: '100%' }))], { optional: true }),
      query(':enter', [animate('300ms ease-out', style({ top: '0%' }))], { optional: true }),
    ]),
  ]),
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          height: '100%',
        }),
      ],
      { optional: true },
    ),
    query(':enter', [style({ top: '-100%' })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('200ms ease-out', style({ top: '100%', opacity: 0 }))], {
        optional: true,
      }),
      query(':enter', [animate('300ms ease-out', style({ top: '0%' }))], { optional: true }),
      query('@*', animateChild(), { optional: true }),
    ]),
  ]),
]);
