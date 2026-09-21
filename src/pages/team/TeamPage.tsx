import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { TEAM } from '../../content/team';

export function TeamPage() {
  useDocumentTitle('Team');
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-24 relative z-10">
      <h1 className="text-5xl md:text-6xl font-display text-star mb-16 text-center">Core Team</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {TEAM.map((member, i) => (
          <div key={i} className="flex flex-col items-center text-center p-6 bg-bg-2/30 rounded-2xl border border-star/5">
            <div className="w-32 h-32 rounded-full bg-muted/20 mb-6 overflow-hidden border-2 border-star/10">
              {member.photo ? (
                <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-star/20">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </div>
              )}
            </div>
            <h3 className="text-xl font-display text-star mb-1">{member.name}</h3>
            <p className="text-betelgeuse text-sm mb-3">{member.role}</p>
            {member.wingSlug && (
              <p className="text-muted text-xs uppercase tracking-wider mb-4">{member.wingSlug}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}