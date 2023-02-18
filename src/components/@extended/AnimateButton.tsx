// third-party
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

// ==============================|| ANIMATION BUTTON ||============================== //
type Props = {
    children: ReactNode;
    type: 'slide' | 'scale' | 'rotate'
}
export default function AnimateButton({ children, type }: Props) {
    switch (type) {
        case 'rotate': // only available in paid version
        case 'slide': // only available in paid version
        case 'scale': // only available in paid version
        default:
            return (
                <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }}>
                    {children}
                </motion.div>
            );
    }
}
