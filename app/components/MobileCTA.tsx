import { ClipboardText, Phone } from "@phosphor-icons/react/dist/ssr";

export default function MobileCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#0A0A12]/92 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-18px_40px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl md:hidden"
      aria-label="Quick contact actions"
    >
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a
          href="/contact"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-violet-700 to-indigo-600 px-4 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-opacity active:scale-[0.98]"
        >
          <ClipboardText size={17} weight="bold" />
          Free Audit
        </a>
        <a
          href="tel:+16476578525"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 text-sm font-semibold text-white transition-colors active:scale-[0.98]"
        >
          <Phone size={17} weight="bold" />
          Call
        </a>
      </div>
    </div>
  );
}
