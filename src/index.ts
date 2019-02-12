import { ITrackingInfo } from './baseTracker';
import { Fedex } from './carriers/fedex';
import { UPS } from './carriers/ups';

export const Track = (trackingNumber: string, callback: (infos: ITrackingInfo, err: any) => void): void => {
  const upsTracker = new UPS(trackingNumber);
  upsTracker.track().subscribe(
    (infos: ITrackingInfo) => {
      callback(infos, null);
    },
    err => {
      callback({} as ITrackingInfo, err);
    },
  );
};

const upsTracker = new UPS('1ZXA13670390302611');

upsTracker.isTrackingNumberFromCarrier().subscribe(result => {
  console.log('result', result);
}, err => {
  console.error('err', err);
})

