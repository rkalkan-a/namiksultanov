import { useTranslation } from "@/hooks/useTranslation";

export function Publicity() {
  const { t } = useTranslation();
  const pdfFile = "/assets/papa-journal.pdf";

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-black mb-6">
            {t("publicity.title")}
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            {t("publicity.subtitle")}
          </p>
        </div>

        {/* PDF Viewer */}
        <div className="bg-warm-light p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-serif font-semibold text-black mb-4 text-center">
            {t("publicity.pdf_viewer")}
          </h2>
          
          <div className="w-full border border-gray-300 rounded-lg overflow-hidden bg-white">
            <iframe
              src={`${pdfFile}#toolbar=1&navpanes=1&scrollbar=1&page=1&view=FitH`}
              title="Papa Journal Publication"
              className="w-full"
              style={{ height: "80vh", minHeight: "600px" }}
              loading="lazy"
            />
          </div>
          
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={pdfFile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
              data-testid="open-pdf-new-tab"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open in New Tab
            </a>
            
            <a
              href={pdfFile}
              download="Namik-Sultanov-Papa-Journal.pdf"
              className="inline-flex items-center px-6 py-3 bg-warm-gray text-white font-medium rounded-lg hover:bg-gray-600 transition-colors"
              data-testid="download-pdf"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}