import { OverlayKey } from '@/types';

export interface SectionProps {
  handleGoToGithub: () => void;
  handleGoToLinkedIn: () => void;
  handleOpenOverlay: (key: OverlayKey) => void;
}
