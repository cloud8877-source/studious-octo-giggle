/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

// --- Utility Functions ---
const debounce = <F extends (...args: any[]) => any>(func: F, waitFor: number) => {
    let timeout: number;
    return (...args: Parameters<F>): void => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), waitFor);
    };
};


// --- Form Validation Logic ---
const form = document.getElementById('contact-form') as HTMLFormElement;

if (form) {
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const successMessage = document.getElementById('form-success-message') as HTMLDivElement;

    const setError = (element: HTMLInputElement, message: string) => {
        const formControl = element.closest('.form-control') as HTMLElement;
        const errorDisplay = formControl.querySelector('.error-message') as HTMLElement;
        
        errorDisplay.innerText = message;
        element.setAttribute('aria-invalid', 'true');
        formControl.classList.add('error');
    };
    
    const clearError = (element: HTMLInputElement) => {
        const formControl = element.closest('.form-control') as HTMLElement;
        const errorDisplay = formControl.querySelector('.error-message') as HTMLElement;
        
        errorDisplay.innerText = '';
        element.setAttribute('aria-invalid', 'false');
        formControl.classList.remove('error');
    };
    
    const clearAllErrors = () => {
        if (nameInput) clearError(nameInput);
        if (emailInput) clearError(emailInput);
    };
    
    const isValidEmail = (email: string): boolean => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    
    const validateInputs = (): boolean => {
        let isFormValid = true;
        if (!nameInput || !emailInput) return false;

        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
    
        if (nameValue === '') {
            setError(nameInput, 'Name is required');
            isFormValid = false;
        } else {
            clearError(nameInput);
        }
    
        if (emailValue === '') {
            setError(emailInput, 'Email is required');
            isFormValid = false;
        } else if (!isValidEmail(emailValue)) {
            setError(emailInput, 'Provide a valid email address');
            isFormValid = false;
        } else {
            clearError(emailInput);
        }
        
        return isFormValid;
    };
    
    form.addEventListener('submit', e => {
        e.preventDefault();
        if (validateInputs()) {
            if (successMessage) {
                successMessage.innerText = 'Thank you! Your consultation request has been submitted successfully.';
                successMessage.classList.add('visible');
                setTimeout(() => {
                    successMessage.classList.remove('visible');
                }, 5000);
            }
            form.reset();
            clearAllErrors();
        }
    });
}


// --- Animated Beams Background Logic ---
interface Beam {
    x: number;
    y: number;
    width: number;
    length: number;
    angle: number;
    speed: number;
    opacity: number;
    hue: number;
    pulse: number;
    pulseSpeed: number;
}

const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement;

if (canvas) {
    const ctx = canvas.getContext('2d');

    if (ctx) {
        let beams: Beam[] = [];
        const NUM_BEAMS = 15;

        const createBeam = (canvasWidth: number, canvasHeight: number): Beam => {
            const angle = -30 + Math.random() * 15;
            return {
                x: Math.random() * canvasWidth * 1.5 - canvasWidth * 0.25,
                y: canvasHeight + Math.random() * 100,
                width: 30 + Math.random() * 60,
                length: canvasHeight * 2,
                angle: angle,
                speed: 0.4 + Math.random() * 0.8,
                opacity: 0.12 + Math.random() * 0.16,
                hue: 190 + Math.random() * 70,
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: 0.02 + Math.random() * 0.03,
            };
        };
        
        const resetBeam = (beam: Beam, canvasWidth: number, canvasHeight: number) => {
            Object.assign(beam, createBeam(canvasWidth, canvasHeight));
        };

        const drawBeam = (ctx: CanvasRenderingContext2D, beam: Beam) => {
            ctx.save();
            ctx.translate(beam.x, beam.y);
            ctx.rotate((beam.angle * Math.PI) / 180);

            const pulsingOpacity = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2);
            const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);

            gradient.addColorStop(0, `hsla(${beam.hue}, 85%, 65%, 0)`);
            gradient.addColorStop(0.5, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`);
            gradient.addColorStop(1, `hsla(${beam.hue}, 85%, 65%, 0)`);

            ctx.fillStyle = gradient;
            ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
            ctx.restore();
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.filter = 'blur(35px)';

            beams.forEach(beam => {
                beam.y -= beam.speed;
                beam.pulse += beam.pulseSpeed;

                if (beam.y < -beam.length) {
                    resetBeam(beam, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));
                }

                drawBeam(ctx, beam);
            });

            requestAnimationFrame(animate);
        };

        const setupCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            if(ctx) {
                ctx.scale(dpr, dpr);
            }
            
            beams = Array.from({ length: NUM_BEAMS }, () => createBeam(rect.width, rect.height));
        };

        setupCanvas();
        animate();
        window.addEventListener('resize', debounce(setupCanvas, 250));
    }
}
