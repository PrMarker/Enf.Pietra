import React, { useState } from 'react';
// import { MapPin, Clock, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      const response = await fetch('https://formsubmit.co/paulo.ricardo040307@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-24 bg-base">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-16">
          <h2 className="text-4xl md:text-5xl font-dmserif text-stone-800 text-center mb-4">Agende sua Consulta</h2>
          <p className="text-lg text-stone-600 text-center mb-12">Preencha o formulário abaixo e entraremos em contato</p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <input type="hidden" name="_subject" value="Nova mensagem do site!" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-stone-700 mb-2">Nome completo</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-nude-200 focus:outline-none focus:ring-2 focus:ring-section transition-all bg-base"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-stone-700 mb-2">E-mail</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-nude-200 focus:outline-none focus:ring-2 focus:ring-section transition-all bg-base"
                  placeholder="Seu e-mail"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-stone-700 mb-2">Telefone</label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-nude-200 focus:outline-none focus:ring-2 focus:ring-section transition-all bg-base"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-stone-700 mb-2">Serviço de interesse</label>
                <input 
                  type="text" 
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-nude-200 focus:outline-none focus:ring-2 focus:ring-section transition-all bg-base"
                  placeholder="Ex: Perfuração, HOF, etc."
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-stone-700 mb-2">Mensagem</label>
              <textarea 
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-nude-200 focus:outline-none focus:ring-2 focus:ring-section transition-all bg-base resize-none"
                placeholder="Digite sua mensagem"
              />
            </div>
            <div className="flex flex-col items-center gap-4">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`flex items-center gap-2 bg-section hover:bg-nude-500 text-white font-medium px-12 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-lg ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5l7.5 7.5 7.5-7.5M12 3v15" />
                    </svg>
                    Enviar mensagem
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 text-green-700 rounded-xl text-center animate-fade-up">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 text-red-700 rounded-xl text-center animate-fade-up">
                  Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;