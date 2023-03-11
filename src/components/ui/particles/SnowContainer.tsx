import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type Options from 'tsparticles-engine';
import type { Engine, RecursivePartial } from 'tsparticles-engine';
import { particles } from './snowOptions.js';

export const SnowContainer = () => {
  const customInit = async (engine: Engine): Promise<void> => {
    await loadFull(engine);
  };

  const options: RecursivePartial<Options.ParticlesOptions> = { particles };

  return <Particles style={{ zIndex: 1 }} width={'100px'} options={options} init={customInit} />;
};