import { ExternalLink, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface EvidenceBlockProps {
  claim: string;
  sources: Array<{ title: string; url: string }>;
  localNote: string;
  imageUrl?: string;
  imageAlt?: string;
  anchorId: string;
}

const EvidenceBlock = ({
  claim,
  sources,
  localNote,
  imageUrl,
  imageAlt,
  anchorId,
}: EvidenceBlockProps) => {
  return (
    <Card id={anchorId} className="border-primary/20 bg-primary/5">
      <CardContent className="pt-6">
        <div className="flex items-start gap-3 mb-4">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary flex-shrink-0">
            <Shield size={20} />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">Evidence-Based Service</h3>
            <p className="text-foreground leading-relaxed mb-4">{claim}</p>
          </div>
        </div>

        {imageUrl && imageAlt && (
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full rounded-lg mb-4 object-cover max-h-64"
            loading="lazy"
          />
        )}

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <ExternalLink size={16} />
            <span>Sources:</span>
          </div>
          <ul className="space-y-2 pl-6">
            {sources.map((source, index) => (
              <li key={index} className="text-sm">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  {source.title}
                  <ExternalLink size={12} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground italic flex items-start gap-2">
            <span className="text-primary">📍</span>
            <span>{localNote}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EvidenceBlock;
